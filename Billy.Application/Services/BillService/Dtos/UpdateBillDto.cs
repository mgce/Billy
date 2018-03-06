using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Dtos
{
    public class UpdateBillDto
    {
        public long BillId { get; set; }
        public string Name { get; set; }
        public DateTime PaymentDate { get; set; }
        public long SupplierId { get; set; }
        public long CategoryId { get; set; }
        public decimal AmountValue { get; set; }
        public Currency Currency { get; set; }
        public PaymentStatus PaymentStatus { get; set; }
    }
}
