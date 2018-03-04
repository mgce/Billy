using System;
using System.Collections.Generic;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.SharedKernel.Exceptions;
using Billy.UnitTests.Extensions;
using Xunit;

namespace Billy.UnitTests.Domain.Models
{
    public class SupplierTests
    {
        private readonly IFixture _fixture;
        public SupplierTests()
        {
            _fixture = new Fixture()
                .CustomConfiguration();
        }

        [Fact]
        public void Supplier_ShouldCreate()
        {
            var supplier = CreateSupplier();

            Assert.NotNull(supplier);
        }

        [Fact]
        public void Supplier_ShouldChangeName()
        {
            var supplier = CreateSupplier();
            var name = _fixture.Create<string>();
            
            supplier.SetName(name);

            Assert.Equal(name, supplier.Name);
        }

        [Fact]
        public void Supplier_ShouldThrowException_WhileNameIsEmpty()
        {
            var supplier = CreateSupplier();
            var name = "";

            Assert.Throws<NameCannotBeEmptyException>(() => supplier.SetName(name));
        }

        private Supplier CreateSupplier()
        {
            return new Supplier(_fixture.Create<string>());
        }
    }
}
