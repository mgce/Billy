﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.SupplierService.Dtos;
using Billy.Application.Services.SupplierService.Exceptions;
using Billy.Application.Services.SupplierService.IoC;
using Billy.Domain.Factories;
using Billy.Domain.Models;
using Billy.Domain.Repositories;

namespace Billy.Application.Services.SupplierService
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly ISupplierFactory _supplierFactory;

        public SupplierService(ISupplierRepository supplierRepository, 
            ISupplierFactory supplierFactory)
        {
            _supplierRepository = supplierRepository;
            _supplierFactory = supplierFactory;
        }

        public async Task<GetSupplierDto> GetById(long id)
        {
            var supplier = await GetSupplier(id);
            return new GetSupplierDto
            {
                Name = supplier.Name
            };
        }

        public async Task<IList<GetSupplierDto>> GetAll()
        {
            var suppliers = await _supplierRepository.GetAll();
            return suppliers.Select(x => new GetSupplierDto
            {
                Name = x.Name
            }).ToList();
        }

        public async Task Add(AddSupplierDto dto)
        {
            var supplier = _supplierFactory.Create(dto.Name, dto.UserId);
            await _supplierRepository.Add(supplier);
        }

        public async Task Update(UpdateSupplierDto dto)
        {
            var supplier = await GetSupplier(dto.SupplierId);
            supplier.Update(dto.Name);
            await _supplierRepository.Update(supplier);
        }

        public async Task Delete(long id)
        {
            var supplier = await GetSupplier(id);
            await _supplierRepository.Delete(supplier);
        }

        public async Task<List<GetBillDto>> GetAllBillsRelatedToSupplier(long id)
        {
            var bills = await _supplierRepository.GetAlRelatedBills(id);
            return bills.Select(x=>new GetBillDto
            {
                Name = x.Name,
                AmountValue = x.Amount.Value,
                Category = x.Category.Name,
                Currency = x.Amount.Currency.ToString(),
                PaymentDate = x.PaymentDate.ToString()
            }).ToList();
        }

        private async Task<Supplier> GetSupplier(long id)
        {
            var supplier = await _supplierRepository.Get(id);
            if (supplier == null)
                throw new SupplierDoesntExistException();
            return supplier;
        }
    }
}
