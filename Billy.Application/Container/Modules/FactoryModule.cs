using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Billy.Domain.Factories;

namespace Billy.Application.Container.Modules
{
    public class FactoryModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<BillFactory>().As<IBillFactory>().InstancePerLifetimeScope();
            builder.RegisterType<SupplierFactory>().As<ISupplierFactory>().InstancePerLifetimeScope();
            builder.RegisterType<CategoryFactory>().As<ICategoryFactory>().InstancePerLifetimeScope();
            builder.RegisterType<AmountFactory>().As<IAmountFactory>().InstancePerLifetimeScope();
        }
    }
}
