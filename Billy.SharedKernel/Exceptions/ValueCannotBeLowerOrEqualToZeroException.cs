using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.SharedKernel.Exceptions
{
    public class ValueCannotBeLowerOrEqualToZeroException : DomainException
    {
        private const string message = "Value cannot be equal to zero or lower.";

        public ValueCannotBeLowerOrEqualToZeroException() : base(message)
        {
        }
    }
}
