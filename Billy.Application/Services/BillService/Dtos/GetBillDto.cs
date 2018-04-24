using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Dtos
{
    public class GetBillDto
    {
        public string UserId { get; set; }
        public long BillId { get; set; }
        public string Name { get; set; }
        public DateTime PaymentDate { get; set; }
        public int DaysLeft { get; set; }
        public string SupplierName { get; set; }
        public string CategoryName { get; set; }
        public decimal? AmountValue { get; set; }
        public string Currency { get; set; }
        public string Status { get; set; }
    }
}
