using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;

namespace Billy.Domain.Factories
{
    public interface IBillFactory
    {
        Bill Create(string name, Amount amount, DateTime paymentDate, Supplier supplier, Category category);
    }
    public class BillFactory : IBillFactory
    {
        public Bill Create(string name, Amount amount, DateTime paymentDate, Supplier supplier, Category category)
        {
            return new Bill(name, amount, paymentDate, supplier, category);
        }
    }
}
