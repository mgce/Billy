using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;
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
                .HasOne(bill => bill.Supplier)
                .WithMany(supplier => supplier.Bills)
                .HasForeignKey(bill => bill.SupplierId);

            builder.Entity<Bill>()
                .HasOne(bill => bill.Category)
                .WithMany(category => category.Bills)
                .HasForeignKey(b => b.CategoryId);

            builder.Entity<Bill>()
                .HasOne(bill => bill.Amount)
                .WithOne(amount => amount.Bill);

            builder.Entity<Bill>()
                .HasOne(bill => bill.User)
                .WithMany(user => user.Bills)
                .HasForeignKey(bill => bill.UserId);

            builder.Entity<Supplier>()
                .HasMany(supplier => supplier.Bills)
                .WithOne(bill => bill.Supplier)
                .HasForeignKey(b => b.SupplierId);

            builder.Entity<Category>()
                .HasOne(category => category.User)
                .WithMany(user => user.Categories)
                .HasForeignKey(category => category.UserId);

            builder.Entity<Supplier>()
                .HasOne(category => category.User)
                .WithMany(user => user.Suppliers)
                .HasForeignKey(category => category.UserId);
        }
    }
}
