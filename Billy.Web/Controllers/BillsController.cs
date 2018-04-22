using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.BillService.IoC;
using Billy.Domain.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    [Route("api/[controller]")]
    public class BillsController : Controller
    {
        private readonly IBillService _billService;

        public BillsController(IBillService billService)
        {
            _billService = billService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IEnumerable<GetBillDto>> Get()
        {
            var user = User.Identity.Name;
            return await _billService.GetAll(user);
        }

        [HttpGet("{id}")]
        public async Task<GetBillDto> Get(long id)
        {
            return await _billService.GetById(id);
        }

        [HttpPost]
        public async Task Post([FromBody]AddBillDto dto)
        {
            dto.UserId = User.Identity.Name;
            await _billService.Add(dto);
        }

        [HttpPut]
        public async Task Put([FromBody] UpdateBillDto dto)
        {
            await _billService.Update(dto);
        }

        [HttpDelete("{id}")]
        public async Task Delete(long id)
        {
            await _billService.Delete(id);
        }

    }
}
