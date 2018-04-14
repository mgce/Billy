using System;
using System.Collections.Generic;
using System.Text;
using Billy.Application.Exceptions;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Services.AccountService.Exceptions
{
    public class InvalidLoginOrPasswordException : BillyException
    {
        private const string message = "Login or Password is invalid";

        public InvalidLoginOrPasswordException() : base(message)
        {
        }
    }
}
