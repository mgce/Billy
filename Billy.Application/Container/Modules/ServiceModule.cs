using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Billy.Application.Services.AccountService;
using Billy.Application.Services.AccountService.IoC;
using Billy.Application.Services.BillService;
using Billy.Application.Services.BillService.IoC;

namespace Billy.Application.Container.Modules
{
    public class ServiceModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<BillService>().As<IBillService>().InstancePerLifetimeScope();
            builder.RegisterType<AccountService>().As<IAccountService>().InstancePerLifetimeScope();
        }
    }
}
