using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.Application.Services.AccountService.Dtos.Response
{
    public class LoginResponseDto
    {
        public string Token { get; set; }
        public DateTime ExpiredAt { get; set; }
        public string RedirectTo { get; set; }
    }
}
