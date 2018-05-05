using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Exceptions;

namespace Billy.Application.Services.SupplierService.Exceptions
{
    public class SupplierDoesntExistException : BillyException
    {
        public static string message = "Supplier doesn't exist";
        public SupplierDoesntExistException() : base(message)
        {
        }
    }
}
