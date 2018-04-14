using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Exceptions;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.BillService.Exceptions
{
    public class CategoryDoesntExistException : BillyException
    {
        private const string message = "Category doesn't exist";
        public CategoryDoesntExistException() : base(message)
        {
        }
    }
}
