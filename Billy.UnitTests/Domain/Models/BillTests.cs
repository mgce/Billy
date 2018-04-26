using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using AutoFixture;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Domain.Enums;
using Billy.SharedKernel.Exceptions;
using Billy.UnitTests.Extensions;
using Xunit;

namespace Billy.UnitTests.Domain.Models
{
    public class BillTests
    {
        private readonly IFixture _fixture;
        public BillTests()
        {
            _fixture = new Fixture()
                .CustomConfiguration();
        }

        [Fact]
        public void Bill_ShouldBeCreated()
        {
            var bill = CreateBill();
            Assert.NotNull(bill);
        }

        [Fact]
        public void Bill_ShouldChangeName()
        {
            var bill = CreateBill();
            var name = _fixture.Create<string>();

            bill.SetName(name);

            Assert.Equal(bill.Name, name);
        }
        [Fact]
        public void Bill_ShouldThrowException_WhileSettingNameWithEmptyString()
        {
            var bill = CreateBill();
            var name = "";

            Assert.Throws<NameCannotBeEmptyException>(() => bill.SetName(name));
        }

        [Fact]
        public void Bill_ShouldChangeAmount()
        {
            var bill = CreateBill();
            var amount = new Amount(_fixture.Create<decimal>(), _fixture.Create<Currency>());

            bill.SetAmount(amount);

            Assert.Equal(bill.Amount, amount);
        }

        [Fact]
        public void Bill_ShouldThrowException_WhileAmountIsNull()
        {
            var bill = CreateBill();
            Amount amount = null;

            Assert.Throws<AmountCannotBeEmptyException>(() => bill.SetAmount(amount));
        }

        [Fact]
        public void Bill_ShouldChangePaymentDate()
        {
            var bill = CreateBill();
            var paymentDate = CreateFuturePaymentDate();

            bill.SetPaymentDate(paymentDate);

            Assert.Equal(bill.PaymentDate, paymentDate);
        }
        [Fact]
        public void Bill_ShouldThrowException_WhilePaymentDateIsInPast()
        {
            var bill = CreateBill();
            var paymentDate = CreatePastPaymentDate();

            Assert.Throws<PaymentDateCannotBeInPastException>(() => bill.SetPaymentDate(paymentDate));
        }

        [Fact]
        public void Bill_ShouldChangePaymentStatus()
        {
            var bill = CreateBill();
            var paymentStatus = PaymentStatus.Paid;

            bill.SetPaymentStatus(paymentStatus);

            Assert.Equal(bill.PaymentStatus, paymentStatus);
        }

        [Fact]
        public void Bill_ShouldChangeSupplier()
        {
            var bill = CreateBill();
            var supplier = CreateSupplier();

            bill.SetSupplier(supplier);

            Assert.Equal(bill.Supplier, supplier);
        }

        [Fact]
        public void Bill_ShouldChangeCategory()
        {
            var bill = CreateBill();
            var category = _fixture.Create<Category>();

            bill.SetCategory(category);

            Assert.Equal(bill.Category, category);
        }

        private Bill CreateBill()
        {
            var name = _fixture.Create<string>();
            var userId = _fixture.Create<string>();
            var amount = new Amount(_fixture.Create<decimal>(), _fixture.Create<Currency>());
            var paymentDate = CreateFuturePaymentDate();
            var supplier = CreateSupplier();
            var category = _fixture.Create<Category>();

            return new Bill(name, amount, paymentDate, supplier, category, userId);

        }

        private Supplier CreateSupplier()
        {
            return new Supplier(_fixture.Create<string>(), _fixture.Create<string>());
        }

        private DateTime CreateFuturePaymentDate()
        {
            return DateTime.Now.AddDays(_fixture.Create<int>());
        }

        private DateTime CreatePastPaymentDate()
        {
            return DateTime.Now.AddDays(- _fixture.Create<double>());
        }
    }
}
