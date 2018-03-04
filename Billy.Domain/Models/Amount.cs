using System;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Domain.Enums;
using Billy.SharedKernel.Exceptions;

namespace Billy.Domain.Models
{
    public class Amount : BaseEntity
    {
        public decimal Value { get; private set; }
        public Currency Currency { get; private set; }
        public Bill Bill { get; set; }

        protected Amount()
        { }

        public Amount(decimal value, Currency currency)
        {
            SetValue(value);
            SetCurrency(currency);
        }

        public void SetValue(decimal value)
        {
            if (value <= 0)
            {
                throw new ValueCannotBeLowerOrEqualToZeroException();
            }
            Value = value;
        }

        public void SetCurrency(Currency currency)
        {
            Currency = currency;
        }
    }
}
