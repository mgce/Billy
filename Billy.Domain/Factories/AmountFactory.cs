using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Domain.Factories
{
    public interface IAmountFactory
    {
        Amount Create(decimal value, Currency currency);
    }
    public class AmountFactory : IAmountFactory
    {
        public Amount Create(decimal value, Currency currency)
        {
            return new Amount(value,currency);
        }
    }
}
