using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;

namespace Billy.Domain.Factories
{
    public interface ISupplierFactory
    {
        Supplier Create(string name, string userId);
    }
    public class SupplierFactory : ISupplierFactory
    {
        public Supplier Create(string name, string userId)
        {
            return new Supplier(name, userId);
        }
    }
}
