﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Models;
using Billy.Infrastructure.Identity.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Billy.Application.Identity
{
    public class JwtGenerator : IJwtGenerator
    {
        private readonly IConfiguration _configuration;

        public JwtGenerator(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public async Task<JsonWebToken> Create(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Id),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtConfiguration:JwtKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.Now.AddDays(Convert.ToDouble(_configuration["JwtConfiguration:JwtExpiresMinutes"]));
            var token = new JwtSecurityToken(
                issuer: _configuration["JwtConfiguration:JwtIssuer"],
                audience: _configuration["JwtConfiguration:JwtIssuer"],
                claims: claims, 
                expires: expires, 
                signingCredentials: creds);

            return new JsonWebToken(new JwtSecurityTokenHandler().WriteToken(token), expires);
        }
    }
}