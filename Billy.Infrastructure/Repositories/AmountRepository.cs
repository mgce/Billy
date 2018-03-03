using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Repositories;

namespace Billy.Infrastructure.Repositories
{
    public class AmountRepository : Repository<Amount>, IAmountRepository
    {
        public AmountRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
