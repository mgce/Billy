﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.Application.Identity
{
    public class RegisterDto
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
