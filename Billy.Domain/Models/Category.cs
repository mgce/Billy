using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Exceptions;
using Billy.SharedKernel.Models;

namespace Billy.Domain.Models
{
   public  class Category : BaseEntity
    {
        public string Name { get; private set; }
        public virtual IList<Bill> Bills { get; protected set; }
        public string UserId { get; protected set; }
        public User User { get; set; }

        protected Category()
        {
            Bills = new List<Bill>();
        }

        public Category(string name, string userId)
        {
            SetName(name);
            SetUserId(userId);
        }

        public void SetName(string name)
        {
            if(string.IsNullOrEmpty(name))
                throw new DomainException("Name cannot be empty");
            Name = name;
        }

        public void SetUserId(string userId)
        {
            if (string.IsNullOrEmpty(userId))
                throw new DomainException("UserId cannot be empty");
            UserId = userId;
        }
    }
}
