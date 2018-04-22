using System;
using System.Collections.Generic;
using System.Text;
using Billy.Domain.Models;

namespace Billy.Domain.Factories
{
    public interface ICategoryFactory
    {
        Category Create(string name, string userId);
    }
    public class CategoryFactory : ICategoryFactory
    {
        public Category Create(string name, string userId)
        {
            return new Category(name, userId);
        }
    }
}
