using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;

namespace Billy.Application.Services.BillService.Dtos
{
    public class GetBillDto
    {
        public long BillId { get; set; }
        public string Name { get; set; }
        public string PaymentDate { get; set; }
        public int DaysLeft { get; set; }
        public string Supplier { get; set; }
        public string Category { get; set; }
        public decimal? AmountValue { get; set; }
        public string Currency { get; set; }
        public string Status { get; set; }
    }
}
