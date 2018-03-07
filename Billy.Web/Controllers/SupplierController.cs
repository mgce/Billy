using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.BillService.IoC;
using Billy.Application.Services.SupplierService.Dtos;
using Billy.Application.Services.SupplierService.IoC;
using Billy.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Billy.Web.Controllers
{
    [Route("api/[controller]")]
    public class SupplierController : Controller
    {
        private readonly ISupplierService _supplierService;

        public SupplierController(ISupplierService supplierService )
        {
            _supplierService = supplierService;
        }

        [HttpGet]
        public async Task<IEnumerable<GetSupplierDto>> Get()
        {
            return await _supplierService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<GetSupplierDto> Get(long id)
        {
            return await _supplierService.GetById(id);
        }

        [HttpPost]
        public async Task Post([FromBody]AddSupplierDto dto)
        {
            await _supplierService.Add(dto);
        }

        [HttpPut]
        public async Task Put([FromBody]UpdateSupplierDto dto)
        {
            await _supplierService.Update(dto);
        }

        [HttpDelete("{id}")]
        public async Task Delete([FromBody] long id)
        {
            await _supplierService.Delete(id);
        }

    }
}
