using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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

        public virtual Supplier Supplier { get; private set; }
        public long? SupplierId { get; private set; }

        public virtual Category Category { get; set; }
        public long? CategoryId { get; set; }

        public virtual Amount Amount { get; set; }
        public long AmountId { get; set; }

        public User Type { get; set; }

        protected Bill()
        {
        }

        public Bill(string name, Amount amount , DateTime paymentDate, Supplier supplier, Category category)
        {
            SetName(name);
            SetAmount(amount);
            SetPaymentDate(paymentDate);
            SetPaymentStatus(PaymentStatus.NotPaid);
            SetSupplier(supplier);
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
            if (amount == null)
                throw new AmountCannotBeEmptyException();
            if (Amount != amount)
                Amount = amount;
        }

        public void SetPaymentDate(DateTime paymentDate)
        {
            if (paymentDate < DateTime.Now)
            {
                throw new PaymentDateCannotBeInPastException();
            }
            PaymentDate = paymentDate;
        }

        public void SetPaymentStatus(PaymentStatus paymentStatus)
        {
            PaymentStatus = paymentStatus;
        }

        public void SetSupplier(Supplier supplier)
        {
            if (Supplier != supplier)
            {
                Supplier = supplier;
                SupplierId = supplier.Id;
            }
        }

        public void SetCategory(Category category)
        {
            if(Category != category)
                Category = category;
        }

        public void Update(string name, Amount amount, DateTime? paymentDate,PaymentStatus? paymentStatus, Supplier supplier, Category category)
        {
            SetName(name);
            SetAmount(amount);
            SetPaymentDate(paymentDate.Value);
            SetPaymentStatus(paymentStatus.Value);
            SetSupplier(supplier);
            SetCategory(category);
        }
    }
}
