using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using AutoFixture;

namespace Billy.UnitTests.Extensions
{
    public static class FixtureExtensions
    {
        public static IFixture CustomConfiguration(this IFixture fixture)
        {
            fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList().ForEach(b => fixture.Behaviors.Remove(b));
            fixture.Behaviors.Add(new OmitOnRecursionBehavior());
            fixture.Register<ExtensionDataObject>(() => null);
            return fixture;
        }
    }
}
