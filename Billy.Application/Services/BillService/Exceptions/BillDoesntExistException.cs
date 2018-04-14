using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Exceptions;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Exceptions
{
    public class BillDoesntExistException : BillyException
    {
        private const string message = "Bill doesn't exist";
        public BillDoesntExistException() : base(message)
        {
        }
    }
}
