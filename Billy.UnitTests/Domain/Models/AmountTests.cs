using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;
using Billy.SharedKernel.Exceptions;
using Xunit;

namespace Billy.UnitTests.Domain.Models
{
    public class AmountTests
    {
        private readonly IFixture _fixture;
        public AmountTests()
        {
            _fixture = new Fixture();
            _fixture.Behaviors.OfType<ThrowingRecursionBehavior>().ToList().ForEach(b => _fixture.Behaviors.Remove(b));
            _fixture.Behaviors.Add(new OmitOnRecursionBehavior());
            _fixture.Register<ExtensionDataObject>(() => null);
        }

        [Fact]
        public void Amount_ShouldBeCreated()
        {
            var amount = CreateAmount();

            Assert.NotNull(amount);
        }

        [Fact]
        private void Amount_ShouldChangeValue()
        {
            var amount = CreateAmount();
            var value = _fixture.Create<decimal>();

            amount.SetValue(value);

            Assert.Equal(value, amount.Value);
        }

        [Fact]
        private void Amount_ShouldThrowException_WhenValueIsLowerThanZero()
        {
            var amount = CreateAmount();
            var value = -_fixture.Create<decimal>();

            Assert.Throws<ValueCannotBeLowerOrEqualToZeroException>(
                () => amount.SetValue(value));
        }

        [Fact]
        private void Amount_ShouldChangeCurrency()
        {
            var amount = CreateAmount();
            var currency = _fixture.Create<Currency>();

            amount.SetCurrency(currency);

            Assert.Equal(currency, amount.Currency);
        }

        private Amount CreateAmount()
        {
            var amountValue = _fixture.Create<decimal>();
            var currency = _fixture.Create<Currency>();

            return new Amount(amountValue, currency);
        }
    }
}
