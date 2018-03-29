using System;
using System.Collections.Generic;
using System.Text;

namespace Billy.Infrastructure.Identity.Models
{
    public class JsonWebToken
    {
        public string Token { get; set; }
        public DateTime ExpiredAt { get; set; }

        protected JsonWebToken()
        {}

        public JsonWebToken(string token, DateTime expiredAt)
        {
            Token = token;
            ExpiredAt = expiredAt;
        }
    }
}
