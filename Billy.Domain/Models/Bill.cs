using System;
using System.Collections.Generic;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Domain.Enums;
using Billy.SharedKernel.Exceptions;

namespace Billy.Domain.Models
{
    public class Bill : BaseEntity, AggregateRoot
    {
        public string Name { get; private set; }
        public DateTime PaymentDate { get; private set; }
        public PaymentStatus PaymentStatus { get; private set; }

        public Supplier Supplier { get; private set; }
        public long SupplierId { get; private set; }

        public Category Category { get; set; }
        public long CategoryId { get; set; }

        public Amount Amount { get; set; }
        public long AmountId { get; set; }

        protected Bill()
        {
        }

        public Bill(string name, Amount amount , DateTime paymentDate, Supplier supplier, Category category)
        {
            SetName(name);
            SetAmount(amount);
            SetPaymentDate(paymentDate);
            SetPaymentStatus(PaymentStatus.NotPaid);
            AddSuplier(supplier);
            SetCategory(category);
        }

        public void SetName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new NameCannotBeEmptyException();
            }
            Name = name;
        }

        public void SetAmount(Amount amount)
        {
            Amount = amount;
        }

        public void SetPaymentDate(DateTime paymentDate)
        {
            PaymentDate = paymentDate;
        }

        public void SetPaymentStatus(PaymentStatus paymentStatus)
        {
            PaymentStatus = paymentStatus;
        }

        public void AddSuplier(Supplier supplier)
        {
            Supplier = supplier;
            SupplierId = supplier.Id;
        }

        public void SetCategory(Category category)
        {
            Category = category;
        }
    }
}
