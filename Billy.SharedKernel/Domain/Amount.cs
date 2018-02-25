using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.SharedKernel.Domain
{
    public class Amount : BaseEntity
    {
        public decimal Value { get; private set; }
        public Currency Currency { get; private set; }

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
                new Exception("Value cannot be lower ot equal to zero");
                return;
            }
            Value = value;
        }

        public void SetCurrency(Currency currency)
        {
            Currency = currency;
        }
    }
}
