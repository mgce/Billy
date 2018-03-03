using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Dtos
{
    public class GetBillDto
    {
        public long BillId { get; set; }
        public string Name { get; set; }
        public DateTime PaymentDate { get; set; }
        public Supplier Supplier { get; set; }
        public Category Category { get; set; }
        public decimal AmountValue { get; set; }
        public Currency Currency { get; set; }
    }
}
