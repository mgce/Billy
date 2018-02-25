using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.SharedKernel.Repositories;

namespace Billy.Domain.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {
    }
}
