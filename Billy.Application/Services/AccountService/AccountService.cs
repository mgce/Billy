using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Identity;
using Billy.Application.Services.AccountService.Dtos;
using Billy.Application.Services.AccountService.Dtos.Response;
using Billy.Application.Services.AccountService.IoC;
using Billy.Domain.Models;
using Billy.Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Identity;

namespace Billy.Application.Services.AccountService
{
    public class AccountService : IAccountService
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

            var jwt = await _jwtGenerator.Create(user);

            return new LoginResponseDto
            {
                Token = jwt.Token,
                ExpiredAt = jwt.ExpiredAt
            };
        }

        public async Task<RegisterResponseDto> Register(RegisterDto dto)
        {
            var user = new User { UserName = dto.UserName, Email = dto.Email };

            var result = await _userManager.CreateAsync(user, dto.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(user, false);
                var jwt = await _jwtGenerator.Create(user);
                return new RegisterResponseDto
                {
                    Token = jwt.Token,
                    ExpiredAt = jwt.ExpiredAt,
                    IsSuccesfull = true
                };

            }

            return new RegisterResponseDto
            {
                IsSuccesfull = false
            };
        }
    }
}