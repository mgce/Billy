using System;
using System.Collections.Generic;
using System.Text;
using Autofac;
using Billy.Application.Identity;

namespace Billy.Application.Container.Modules
{
    public class IdentityModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            builder.RegisterType<JwtGenerator>().As<IJwtGenerator>().InstancePerLifetimeScope();
        }
    }
}
