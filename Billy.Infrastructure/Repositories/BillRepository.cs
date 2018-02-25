using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Billy.SharedKernel.Repositories;

namespace Billy.Infrastructure.Repositories
{
    public class BillRepository : Repository<Bill>, IBillRepository
    {
        public BillRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
