using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.Application.Services.SupplierService.Dtos
{
    public class UpdateSupplierDto
    {
        public long SupplierId { get; set; }
        public string Name { get; set; }
    }
}
