using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.Application.Services.AccountService.Dtos.Response
{
    public class RegisterResponseDto
    {
        public string Token { get; set; }
        public DateTime ExpiredAt { get; set; }
        public bool IsSuccesfull { get; set; }
    }
}
