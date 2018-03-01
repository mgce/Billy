using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Billy.Application.Identity;
using Billy.Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IJwtGenerator _jwtGenerator;

        public AccountController(UserManager<User> userManager,
            SignInManager<User> signInManager,
            IJwtGenerator jwtGenerator)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtGenerator = jwtGenerator;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account")]
        public async Task<object> Login([FromBody] LoginDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(dto);
            }

            var result = await _signInManager.PasswordSignInAsync(dto.Email, dto.Password, false, true);
            if (!result.Succeeded)
            {
                throw new Exception("Invalid login or password");
            }
            var user = _userManager.Users.SingleOrDefault(u => u.Email == dto.Email);
            return Ok(_jwtGenerator.Create(user));
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account/register")]
        public async Task<IActionResult> Register(RegisterDto dto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(dto);
            }

            var user = new User {UserName = dto.UserName, Email = dto.Email};

            var result = await _userManager.CreateAsync(user, dto.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return Ok(_jwtGenerator.Create(user));
            }

            return BadRequest(user);
        }
    }
}
