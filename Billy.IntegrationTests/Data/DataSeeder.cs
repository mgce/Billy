﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Infrastructure;
using Microsoft.AspNetCore.Identity;

namespace Billy.IntegrationTests.Data
{
    public class DataSeeder
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _context;

        public DataSeeder(DataContext context, UserManager<User> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public void Seed()
        {
            _context.Bills.AddRange(PredefiniedData.Bills);
            _context.Suppliers.AddRange(PredefiniedData.Suppliers);
            _context.Categories.AddRange(PredefiniedData.Categories);
            _context.SaveChanges();
        }
    }
}
