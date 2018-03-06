using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Autofac;
using Billy.Domain.Repositories;
using Billy.Infrastructure.Repositories;
using Module = Autofac.Module;

namespace Billy.Application.Container.Modules
{
    public class RepositoryModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<BillRepository>().As<IBillRepository>().InstancePerLifetimeScope();
            builder.RegisterType<SupplierRepository>().As<ISupplierRepository>().InstancePerLifetimeScope();
            builder.RegisterType<CategoryRepository>().As<ICategoryRepository>().InstancePerLifetimeScope();
            builder.RegisterType<AmountRepository>().As<IAmountRepository>().InstancePerLifetimeScope();

        }
    }
}
