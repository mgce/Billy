using System;
using System.Collections.Generic;
using System.Text;
using Billy.Infrastructure;
using Billy.Web;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Billy.IntegrationTests
{
    public class TestStartup : Startup
    {
        public TestStartup(IConfiguration configuration) : base(configuration)
        {
        }

        public override void ConfigureDatabase(IServiceCollection services)
        {
            services.AddDbContext<DataContext>(options => 
                options.UseInMemoryDatabase("testdb"));
        }
    }
}
