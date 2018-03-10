using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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

        public async Task<List<Bill>> GetAlRelatedBills(long id)
        {
            var supplier = await Get(id);
            return supplier.Bills;
        }
    }
}
