using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Resources;
using Billy.Domain.Models;

namespace Billy.Application.Mappers
{
    public static class BillMapper
    {
        public static BillResource ToResource(this Bill bill)
        {
            var resource = bill.ToResourceWithoutRelations();
            resource.User = bill.User.ToResource();
            return resource;
        }
        public static BillResource ToResourceWithoutRelations(this Bill bill)
        {
            return new BillResource
            {
                Name = bill.Name,
                PaymentStatus = bill.PaymentStatus,
                PaymentDate = bill.PaymentDate
            };
        }
    }
}
