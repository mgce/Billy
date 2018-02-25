using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Domain.Repositories;

namespace Billy.Infrastructure.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(DataContext dataContext) 
            : base(dataContext)
        {
        }
    }
}
