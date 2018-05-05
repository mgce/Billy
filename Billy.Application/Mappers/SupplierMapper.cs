using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Resources;
using Billy.Domain.Models;

namespace Billy.Application.Mappers
{
    public static class SupplierMapper
    {
        public static SupplierResource ToResource(this Supplier supplier)
        {
            var resource = supplier.ToResourceWithoutRelations();
            foreach (var bill in supplier.Bills)
            {
                resource.Bills.Add(bill.ToResourceWithoutRelations());
            }
            return resource;
        }

        public static SupplierResource ToResourceWithoutRelations(this Supplier supplier)
        {
            return new SupplierResource
            {
                Name = supplier.Name
            };
        }
    }
}
