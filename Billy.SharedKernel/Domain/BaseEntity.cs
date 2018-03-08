using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.SharedKernel.Domain
{
    public class BaseEntity
    {
        public long Id { get; private set; }
        public DateTime CreatedAt { get;}
        public DateTime ModifiedAt { get; private set; }
        public State State { get; private set; }

        protected BaseEntity()
        {
            CreatedAt = DateTime.Now;
            ModifiedAt = DateTime.Now;
            State = State.Active;
        }

        public void SetState(State state)
        {
            State = state;
        }

        public void SetModifiedDate()
        {
            ModifiedAt = DateTime.Now;
        }

        public void Delete()
        {
            State = State.Deleted;
        }
        
    }

}
