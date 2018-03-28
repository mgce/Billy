using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Identity;
using Billy.Application.Services.AccountService.Dtos;
using Billy.Application.Services.AccountService.Dtos.Response;
using Billy.Domain.Models;
using Microsoft.AspNetCore.Identity;

namespace Billy.Application.Services.AccountService
{
    public class AccountService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IJwtGenerator _jwtGenerator;

        public AccountService(UserManager<User> userManager,
            SignInManager<User> signInManager,
            IJwtGenerator jwtGenerator)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtGenerator = jwtGenerator;
        }

        public async Task<LoginResponseDto> Login(LoginDto dto)
        {
            var result = await _signInManager.PasswordSignInAsync(dto.Username, dto.Password, false, true);
            if (!result.Succeeded)
            {
                throw new Exception("Invalid login or password");
            }
            var user = _userManager.Users.SingleOrDefault(u => u.UserName == dto.Username);

            var token = await _jwtGenerator.Create(user);

            return new LoginResponseDto
            {
                Token = token,
                RedirectTo = "/"
            };
        }

        public async Task<object> Register(RegisterDto dto)
        {
            var user = new User { UserName = dto.UserName, Email = dto.Email };

            var result = await _userManager.CreateAsync(user, dto.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                return _jwtGenerator.Create(user);
            }

            return null;
        }
    }
}

/* Dodac RegisterResponseDtos, dodac interfejs
 *
 *
 */
