using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
using Billy.Infrastructure.Identity.Models;
using Billy.SharedKernel.Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Billy.Infrastructure
{
    public class DataContext : IdentityDbContext<User>
    {
        public DataContext(DbContextOptions options) 
            : base(options)
        {}

        public DbSet<Bill> Bills { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Amount> Amounts { get; set; }
    }
}
