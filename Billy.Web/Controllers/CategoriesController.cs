using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Billy.Application.Services.CategoryService;
using Billy.Application.Services.CategoryService.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    [Route("api/[controller]")]
    public class CategoriesController : Controller
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IEnumerable<GetCategoryDto>> Get()
        {
            var user = User.Identity.Name;
            return await _categoryService.GetAll(user);
        }

        [HttpPost]
        [Authorize]
        public async Task<IEnumerable<GetCategoryDto>> Post(string categoryName)
        {
            var user = User.Identity.Name;
            return await _categoryService.Add(categoryName, user);
        }
    }


}
