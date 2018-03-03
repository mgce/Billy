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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Bill>().HasKey(x => x.Id);
            builder.Entity<Supplier>().HasKey(x => x.Id);
            builder.Entity<Category>().HasKey(x => x.Id);
            builder.Entity<Amount>().HasKey(x => x.Id);

            builder.Entity<Bill>()
                .HasOne(b => b.Supplier)
                .WithMany(s => s.Bills)
                .HasForeignKey(b => b.SupplierId);

            builder.Entity<Bill>()
                .HasOne(b => b.Category)
                .WithMany(c => c.Bills)
                .HasForeignKey(b => b.CategoryId);

            builder.Entity<Bill>()
                .HasOne(b => b.Amount)
                .WithOne(a => a.Bill);

            builder.Entity<Supplier>()
                .HasMany(s => s.Bills)
                .WithOne(b => b.Supplier)
                .HasForeignKey(b => b.SupplierId);
        }
    }
}
