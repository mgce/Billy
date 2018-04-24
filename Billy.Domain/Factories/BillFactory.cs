using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;

namespace Billy.Domain.Factories
{
    public interface IBillFactory
    {
        Bill Create(string name, Amount amount, DateTime paymentDate, Supplier supplier, Category category, string userId);
    }
    public class BillFactory : IBillFactory
    {
        public Bill Create(string name, Amount amount, DateTime paymentDate, Supplier supplier, Category category, string userId)
        {
            return new Bill(name, amount, paymentDate, supplier, category, userId);
        }
    }
}
