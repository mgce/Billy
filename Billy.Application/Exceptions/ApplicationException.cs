using System;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.Application.Exceptions
{
    public class BillyException : Exception
    {
        public ExceptionType Type { get; set; }

        public BillyException(string message, ExceptionType type)
            : base(message)
        {
            Type = type;
        }
    }
}
