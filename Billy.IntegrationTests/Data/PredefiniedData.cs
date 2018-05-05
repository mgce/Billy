using Billy.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Enums;

namespace Billy.IntegrationTests.Data
{
    public static class PredefiniedData
    {
        private static readonly string userId = Guid.NewGuid().ToString();

        public static List<Bill> Bills = new List<Bill>
        {
            new Bill("Bill1", new Amount(12, Currency.PLN), DateTime.Now.AddDays(3), new Supplier("supplier1", userId),
                new Category("category1",userId), userId),
            new Bill("Bill2", new Amount(22, Currency.PLN), DateTime.Now.AddDays(4), new Supplier("supplier2", userId),
                new Category("category2", userId), userId),
            new Bill("Bill3", new Amount(32, Currency.PLN), DateTime.Now.AddDays(5), new Supplier("supplier3", userId),
                new Category("category3", userId), userId),
            new Bill("Bill4", new Amount(42, Currency.PLN), DateTime.Now.AddDays(6), new Supplier("supplier4", userId),
                new Category("category4", userId), userId),
        };

        public static List<Supplier> Suppliers = new List<Supplier>
        {
            new Supplier("Supplier1", userId),
            new Supplier("Supplier2", userId)
        };

        public static List<Category> Categories = new List<Category>
        {
            new Category("Category1",userId),
            new Category("Category2",userId)
        };
    }
}
