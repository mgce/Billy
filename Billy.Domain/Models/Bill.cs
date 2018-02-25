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
        public Amount Amount { get; private set; }
        public DateTime PaymentDate { get; private set; }
        public PaymentStatus PaymentStatus { get; private set; }

        public Supplier Supplier { get; private set; }
        public long SupplierId { get; private set; }

        public List<Category> Categories { get; set; }

        protected Bill()
        {
            Categories = new List<Category>();
        }

        public Bill(string name, Amount amount , DateTime paymentDate, Supplier supplier)
        {
            SetName(name);
            SetAmount(amount);
            SetPaymentDate(paymentDate);
            SetPaymentStatus(PaymentStatus.NotPaid);
            AddSuplier(supplier);
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

        public void AddCategory(Category category)
        {
            Categories.Add(category);
        }
    }
}
