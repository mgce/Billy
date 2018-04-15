using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Billy.SharedKernel.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Billy.Infrastructure.Repositories
{
    public class BillRepository : Repository<Bill>, IBillRepository
    {
        public BillRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }

        public async Task<IEnumerable<Bill>> GetAllForUser(string userId)
        {
            var query = _context.Set<Bill>().Where(x=>x.UserId == userId).AsQueryable();
            //loading all related entities
            foreach (var property in _context.Model.FindEntityType(typeof(Bill)).GetNavigations())
            {
                query = query.Include(property.Name);
            }
            return await query.ToListAsync();
        }
    }
}
