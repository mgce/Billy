using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Dtos
{
    public class DeleteBillDto
    {
        public long BillId { get; set; }
    }
}
