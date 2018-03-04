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
    public class BillController : Controller
    {
        private readonly IBillService _billService;

        public BillController(IBillService billService)
        {
            _billService = billService;
        }

        [HttpGet]
        public async Task<GetBillDto> Get([FromBody] GetBillDto dto)
        {
            return await _billService.GetBill(dto);
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
