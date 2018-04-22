using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Dtos
{
    public class AddBillDto
    {
        public string Name { get; set; }
        public DateTime PaymentDate { get; set; }
        public string Supplier { get; set; }
        public string Category { get; set; }
        public decimal AmountValue { get; set; }
        public Currency Currency { get; set; }
        public string UserId { get; set; }
    }
}
