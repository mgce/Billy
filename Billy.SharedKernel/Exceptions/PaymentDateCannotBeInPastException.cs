using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.SharedKernel.Exceptions
{
    public class PaymentDateCannotBeInPastException : DomainException
    {
        private const string message = "Payment Date cannot be in past.";
        public PaymentDateCannotBeInPastException() : base(message)
        {
        }
    }
}
