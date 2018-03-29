using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Billy.Application.Identity;
using Billy.Application.Services.AccountService.Dtos;
using Billy.Application.Services.AccountService.Dtos.Response;
using Billy.Application.Services.AccountService.IoC;
using Billy.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService )
        {
            _accountService = accountService;
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account")]
        public async Task<LoginResponseDto> Login([FromBody] LoginDto dto)
        {
            return await _accountService.Login(dto);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("account/register")]
        public async Task<RegisterResponseDto> Register([FromBody]RegisterDto dto)
        {
            return await _accountService.Register(dto);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("account/validate")]
        public bool ValidToken()
        {
            return User.Identity.IsAuthenticated;
        }
    }
}
