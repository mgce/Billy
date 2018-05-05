using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.SharedKernel.Repositories;

namespace Billy.Domain.Repositories
{
    public interface IBillRepository : IRepository<Bill>
    {
        Task<IQueryable<Bill>> GetAllForUser(string userId);
    }
}
