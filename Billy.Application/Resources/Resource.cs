using System;
using System.Collections.Generic;
using System.Text;
using Billy.Infrastructure.Link;
using Billy.SharedKernel.Enums;

namespace Billy.Application.Resources
{
    public class Resource
    {
        public DateTime CreatedAt { get; }
        public DateTime ModifiedAt { get; set; }
        public State State { get; set; }
    }
}
