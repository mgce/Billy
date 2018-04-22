using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Billy.Domain.Models
{
    public class User : IdentityUser
    {
        public ICollection<Bill> Bills { get; set; }
        public ICollection<Category> Categories { get; set; }
        public ICollection<Supplier> Suppliers { get; set; }
    }
}
