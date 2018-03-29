using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Services.AccountService.Dtos;
using Billy.Application.Services.AccountService.Dtos.Response;

namespace Billy.Application.Services.AccountService.IoC
{
    public interface IAccountService
    {
        Task<LoginResponseDto> Login(LoginDto dto);
        Task<RegisterResponseDto> Register(RegisterDto dto);
    }
}
