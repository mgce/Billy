using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

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

        public async Task<Supplier> GetByName(string name, string userId)
        {
            return await _context.Suppliers.SingleOrDefaultAsync(supplier =>
                supplier.Name == name && supplier.UserId == userId);
        }
    }
}
