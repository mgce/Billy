using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Domain;

namespace Billy.Domain.Models
{
   public  class Category : BaseEntity
    {
        public string Name { get; private set; }
        public long BillId { get; protected set; }
        public virtual Bill Bill { get; protected set; }

        protected Category()
        {}

        public Category(string name)
        {
            SetName(name);
        }

        public void SetName(string name)
        {
            if(string.IsNullOrEmpty(name))
                throw new Exception("Name cannot be empty");
            Name = name;
        }
    }
}
