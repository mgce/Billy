using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.SharedKernel.Repositories;

namespace Billy.Domain.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {
        Task<ICollection<Category>> GetAllForUser(string userId);
        Task<Category> GetByName(string name, string userId);
    }
}
