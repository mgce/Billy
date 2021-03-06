﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Billy.Application.Container.Modules;
using Billy.Domain.Models;
using Billy.Infrastructure;
using Billy.Web.Exceptions;
using Billy.Web.Filters;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace Billy.Web
{
    public class Startup
    {
        private readonly IHostingEnvironment _currentEnvironment;
        private int? _httpsPort;

        public Startup(IConfiguration configuration, IHostingEnvironment currentEnvironment)
        {
            _currentEnvironment = currentEnvironment;
            Configuration = configuration;
        }
        public Autofac.IContainer ApplicationContainer { get; private set; }
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            ConfigureDatabase(services);

            services.AddIdentity<User, IdentityRole>()
                .AddEntityFrameworkStores<DataContext>()
                .AddDefaultTokenProviders();

            JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = false;
                cfg.SaveToken = true;
                cfg.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidIssuer = Configuration["JwtConfiguration:JwtIssuer"],
                    ValidAudience = Configuration["JwtConfiguration:JwtIssuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JwtConfiguration:JwtKey"])),
                    ClockSkew = TimeSpan.Zero
                };
            });

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser().Build());
            });


            if (_currentEnvironment.IsDevelopment())
            {
                var launchSettingsConfig = new ConfigurationBuilder()
                    .SetBasePath(_currentEnvironment.ContentRootPath)
                    .AddJsonFile("Properties//launchSettings.json")
                    .Build();

                _httpsPort = launchSettingsConfig.GetValue<int>("iisSettings::iisExpress::sslPort");
            }

            services.AddMvc(config =>
            {
                config.SslPort = _httpsPort;
                config.Filters.Add(new RequireHttpsAttribute());
                config.Filters.Add(typeof(LinkRewritingFilter));

            });

            return ConfigureContainer(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public virtual void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var options = new RewriteOptions()
                .AddRedirectToHttps();

            app.UseRewriter(options);
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                //Exception middleware must be here to catch exceptions before UseDeveloperExceptionPage
                app.UseErrorHandlingMiddleware();
                app.UseBrowserLink();
            }
            else
            {
                app.UseErrorHandlingMiddleware();
            }
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseHsts(opt =>
            {
                opt.MaxAge(days: 1000);
                opt.IncludeSubdomains();
                opt.Preload();
            });
            app.UseMvc(routes=> {
                routes.MapRoute(name: "default", template: "{controller=Home}/{action=Index}/{id?}");
            });
        }

        public virtual void ConfigureDatabase(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options =>
            {
                //options.UseSqlServer(Configuration["SecondConnection"]);
                options.UseSqlServer(Configuration["DefaultConnection"]);
            });
        }

        private AutofacServiceProvider ConfigureContainer(IServiceCollection services)
        {
            var builder = new ContainerBuilder();
            builder.Populate(services);
            builder.RegisterModule<RepositoryModule>();
            builder.RegisterModule<IdentityModule>();
            builder.RegisterModule<ServiceModule>();
            builder.RegisterModule<FactoryModule>();
            ApplicationContainer = builder.Build();
            return new AutofacServiceProvider(ApplicationContainer);
        }

    }
}
