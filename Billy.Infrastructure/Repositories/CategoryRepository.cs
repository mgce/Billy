using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Billy.Infrastructure.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }

        public async Task<ICollection<Category>> GetAllForUser(string userId)
        {
            return await _context
                .Categories
                .Where(category => category.UserId == userId)
                .ToListAsync();
        }

        public async Task<Category> GetByName(string name, string userId)
        {
            return await _context.Categories.SingleOrDefaultAsync(category =>
                category.Name == name && category.UserId == userId);
        }
    }
}
