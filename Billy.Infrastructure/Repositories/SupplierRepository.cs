using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Domain.Repositories;

namespace Billy.Infrastructure.Repositories
{
    public class SupplierRepository : Repository<Supplier>, ISupplierRepository
    {
        public SupplierRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
