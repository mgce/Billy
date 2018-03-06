using Billy.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Billy.SharedKernel.Domain.Enums;

namespace Billy.IntegrationTests.Data
{
    public static class PredefiniedData
    {
        public static List<Bill> Bills = new List<Bill>
        {
            new Bill("Bill1", new Amount(12, Currency.PLN), DateTime.Now.AddDays(3), new Supplier("supplier1"),
                new Category("category1")),
            new Bill("Bill2", new Amount(22, Currency.PLN), DateTime.Now.AddDays(4), new Supplier("supplier2"),
                new Category("category2")),
            new Bill("Bill3", new Amount(32, Currency.PLN), DateTime.Now.AddDays(5), new Supplier("supplier3"),
                new Category("category3")),
            new Bill("Bill4", new Amount(42, Currency.PLN), DateTime.Now.AddDays(6), new Supplier("supplier4"),
                new Category("category4")),
        };
    }
}
