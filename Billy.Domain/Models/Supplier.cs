using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Exceptions;

namespace Billy.Domain.Models
{
    public class Supplier : BaseEntity
    {
        public string Name { get; protected set; }
        public virtual List<Bill> Bills { get; protected set; }
        public string UserId { get; protected set; }
        public User User { get; protected set; }

        protected Supplier()
        {
            Bills = new List<Bill>();
        }

        public Supplier(string name, string userId)
        {
            SetName(name);
            SetUserId(userId);
        }

        public void SetName(string name)
        {
            if(string.IsNullOrEmpty(name))
                throw new NameCannotBeEmptyException();
            Name = name;
        }

        public void SetUserId(string userId)
        {
            if (string.IsNullOrEmpty(userId))
                throw new UserIdCannotBeEmptyException();
            UserId = userId;
        }


        public void AddBill(Bill bill)
        {
            Bills.Add(bill);
        }

        public void Update(string name)
        {
            SetName(name);
        }
    }
}
