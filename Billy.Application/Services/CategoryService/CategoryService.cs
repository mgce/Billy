using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Services.CategoryService.Dtos;
using Billy.Domain.Factories;
using Billy.Domain.Repositories;

namespace Billy.Application.Services.CategoryService
{
    public interface ICategoryService
    {
        Task<ICollection<GetCategoryDto>> Add(string categoryName, string userId);
        Task<ICollection<GetCategoryDto>> GetAll(string userId);
    }

    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly ICategoryFactory _categoryFactory;

        public CategoryService(ICategoryRepository categoryRepository,
            ICategoryFactory categoryFactory)
        {
            _categoryRepository = categoryRepository;
            _categoryFactory = categoryFactory;
        }

        public async Task<ICollection<GetCategoryDto>> Add(string categoryName, string userId)
        {
            var newCategory = _categoryFactory.Create(categoryName, userId);
            await _categoryRepository.Add(newCategory);
            return await GetAll(userId);
        }

        public async Task<ICollection<GetCategoryDto>> GetAll(string userId)
        {
            var categories = await _categoryRepository.GetAllForUser(userId);
            return categories.Select(category => new GetCategoryDto
            {
                Id = category.Id,
                Name = category.Name
            }).ToList();
        }
    }
}
