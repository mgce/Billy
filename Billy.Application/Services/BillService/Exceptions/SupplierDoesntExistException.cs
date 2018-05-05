using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Exceptions;

namespace Billy.Application.Services.BillService.Exceptions
{
    public class SupplierDoesntExistException : BillyException
    {
        private const string message = "Supplier doesn't exist";
        public SupplierDoesntExistException() : base(message)
        {
        }
    }
}
