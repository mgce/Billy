using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.SharedKernel.Exceptions
{
    public class AmountCannotBeEmptyException : DomainException
    {
        private const string message = "Amount cannot be empty";
        public AmountCannotBeEmptyException() : base(message)
        {
        }
    }
}
