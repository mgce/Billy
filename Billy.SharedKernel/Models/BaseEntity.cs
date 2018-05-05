using System;
using Billy.SharedKernel.Enums;

namespace Billy.SharedKernel.Models
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
