using System;
using System.Collections.Generic;
using System.Text;
using Autofac;

namespace Billy.Application.Container.Modules
{
    public class FactoryModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterAssemblyTypes(AppDomain.CurrentDomain.GetAssemblies())
                .Where(t => t.Name.EndsWith("Factory")).AsImplementedInterfaces().InstancePerRequest();
        }
    }
}
