using System;
using System.Collections.Generic;
using System.Text;
using Autofac;

namespace Billy.Application.Container.Modules
{
    public class RepositoryModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterAssemblyTypes(AppDomain.CurrentDomain.GetAssemblies())
                .Where(t => t.Name.EndsWith("Repository")).AsImplementedInterfaces().InstancePerRequest();
        }
    }
}
