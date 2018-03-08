using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Billy.Domain.Models
{
    public class User : IdentityUser
    {
        public ICollection<Bill> Bills { get; set; }
    }
}
