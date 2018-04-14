using System;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Exceptions
{
    public class BillyException : Exception
    {
        public BillyException(string message)
            : base(message)
        {
        }
    }
}
