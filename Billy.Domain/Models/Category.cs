using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Exceptions;

namespace Billy.Domain.Models
{
   public  class Category : BaseEntity
    {
        public string Name { get; private set; }
        public virtual IList<Bill> Bills { get; protected set; }

        protected Category()
        {
            Bills = new List<Bill>();
        }

        public Category(string name)
        {
            SetName(name);
        }

        public void SetName(string name)
        {
            if(string.IsNullOrEmpty(name))
                throw new NameCannotBeEmptyException();
            Name = name;
        }
    }
}
