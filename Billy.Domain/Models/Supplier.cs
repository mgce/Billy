using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Exceptions;

namespace Billy.Domain.Models
{
    public class Supplier : BaseEntity
    {
        public string Name { get; set; }
        public virtual List<Bill> Bills { get; set; }

        protected Supplier()
        {
            Bills = new List<Bill>();
        }

        public Supplier(string name)
        {
            SetName(name);
        }

        public void SetName(string name)
        {
            if(string.IsNullOrEmpty(name))
                throw new NameCannotBeEmptyException();
            Name = name;
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
