using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.BillService.IoC;
using Billy.Domain.Models;
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
        public async Task<IEnumerable<GetBillDto>> Get()
        {
            return await _billService.GetAllBills();
        }

        [HttpGet("{id}")]
        public async Task<GetBillDto> Get(long id)
        {
            return await _billService.GetBill(id);
        }

        [HttpPost]
        public async Task Post([FromBody] AddBillDto dto)
        {
            await _billService.AddBill(dto);
        }

        [HttpPut]
        public async Task Update([FromBody] UpdateBillDto dto)
        {
            await _billService.UpdateBill(dto);
        }

        [HttpDelete]
        public async Task Delete([FromBody] DeleteBillDto dto)
        {
            await _billService.DeleteBill(dto);
        }

    }
}
