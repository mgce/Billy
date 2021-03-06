﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.SharedKernel.Repositories;

namespace Billy.Domain.Repositories
{
    public interface ISupplierRepository : IRepository<Supplier>
    {
        Task<List<Bill>> GetAlRelatedBills(long id);
        Task<Supplier> GetByName(string name, string userId);
    }
}
