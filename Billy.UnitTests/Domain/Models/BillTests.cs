using System;
using System.Collections.Generic;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain;
using Xunit;

namespace Billy.UnitTests.Domain.Models
{
    public class BillTests
    {
        private readonly IFixture _fixture;
        public BillTests()
        {
            _fixture = new Fixture();
        }

        public void Bill_ShouldBeCreated()
        {
            var name = _fixture.Create<string>();
            var amount = _fixture.Create<Amount>();
            var paymentDate = _fixture.Create<DateTime>();
            var supplier = _fixture.Create<Supplier>();

            var bill = new Bill(name, amount, paymentDate, supplier);

            Assert.NotNull(bill);
        }

        public void Bill_ShouldChangeName()
        {
            var bill = _fixture.Create<Bill>();
            var name = _fixture.Create<string>();

            bill.SetName(name);

            Assert.Equal(bill.Name, name);
        }

        public void Bill_ShouldThrowException_WhileSettingNameWithEmptyString()
        {
            var bill = _fixture.Create<Bill>();
            var name = "";

            Assert.Throws<Exception>(() => bill.SetName(name));
        }

    }
}
