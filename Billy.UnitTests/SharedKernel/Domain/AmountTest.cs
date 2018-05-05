using System;
using System.Collections.Generic;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.SharedKernel.Enums;
using Xunit;

namespace Billy.UnitTests.SharedKernel.Domain
{
    public class AmountTest
    {
        private readonly IFixture _fixture;

        public AmountTest()
        {
            _fixture = new Fixture();
        }

        [Fact]
        public void Amount_ShouldBeCreated()
        {
            var value = _fixture.Create<decimal>();
            var currency = _fixture.Create<Currency>();

            var amount = new Amount(value, currency);

            Assert.Equal(amount.Currency, currency);
            Assert.Equal(amount.Value, value);
        }

        [Fact]
        public void Amount_ShouldSetValue()
        {
            var value = _fixture.Create<decimal>();
            var amount = _fixture.Create<Amount>();

            amount.SetValue(value);

            Assert.Equal(amount.Value, value);
        }

        [Fact]
        public void Amount_ShouldSetCurrency()
        {
            var amount = _fixture.Create<Amount>();
            var currency = _fixture.Create<Currency>();

            amount.SetCurrency(currency);

            Assert.Equal(amount.Currency, currency);
        }
    }
}
