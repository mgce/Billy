using System;
using System.Collections.Generic;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.UnitTests.Extensions;
using Xunit;

namespace Billy.UnitTests.Domain.Models
{
    public class CategoryTests
    {
        private readonly IFixture _fixture;
        public CategoryTests()
        {
            _fixture = new Fixture()
                .CustomConfiguration();
        }

        [Fact]
        public void Category_ShouldBeCreated()
        {
            var name = _fixture.Create<string>();

            var category = new Category(name);

            Assert.NotNull(category);
            Assert.Equal(category.Name, name);
        }

        [Fact]
        public void Category_ShouldThrowException_WhileSettingNameWithEmptyName()
        {
            var name = "";

            var category = _fixture.Create<Category>();

            Assert.Throws<Exception>(() => category.SetName(name));
        }
    }
}
