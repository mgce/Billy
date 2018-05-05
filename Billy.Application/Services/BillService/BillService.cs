using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Billy.Application.Mappers;
using Billy.Application.Resources;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.BillService.Exceptions;
using Billy.Application.Services.BillService.IoC;
using Billy.Domain.Factories;
using Billy.Domain.Models;
using Billy.Domain.Repositories;
using Billy.SharedKernel.PagedList;

namespace Billy.Application.Services.BillService
{
    public class BillService : IBillService
    {
        private readonly IBillRepository _billRepository;
        private readonly ISupplierRepository _supplierRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IBillFactory _billFactory;
        private readonly IAmountFactory _amountFactory;
        private readonly ISupplierFactory _supplierFactory;
        private readonly ICategoryFactory _categoryFactory;

        public BillService(IBillRepository billRepository,
            ISupplierRepository supplierRepository,
            ICategoryRepository categoryRepository,
            IBillFactory billFactory,
            IAmountFactory amountFactory,
            ISupplierFactory supplierFactory,
            ICategoryFactory categoryFactory)
        {
            _billRepository = billRepository;
            _supplierRepository = supplierRepository;
            _categoryRepository = categoryRepository;
            _billFactory = billFactory;
            _amountFactory = amountFactory;
            _supplierFactory = supplierFactory;
            _categoryFactory = categoryFactory;
        }

        public async Task<BillResource> GetById(long id)
        {
            var bill = await GetBillById(id);
            return bill.ToResource();
        }

        public async Task<PagedList<Bill>> GetAll(GetAllBillsDto dto)
        {
            var bills = await _billRepository.GetAllForUser(dto.UserId);
            return PagedList<Bill>.Create(bills, dto.PageNumber, dto.PageSize);
        }

        public async Task Add(AddBillDto dto)
        {
            var amount = _amountFactory.Create(dto.AmountValue, dto.Currency);
            var supplier = await GetSupplierByName(dto.Supplier, dto.UserId);
            var category = await GetCategoryByName(dto.Category, dto.UserId);

            var bill = _billFactory.Create(dto.Name, amount, dto.PaymentDate.Date, supplier, category, dto.UserId);

            await _billRepository.Add(bill);
        }

        public async Task Update(UpdateBillDto dto)
        {
            var bill = await _billRepository.Get(dto.BillId);
            var amount = _amountFactory.Create(dto.AmountValue, dto.Currency);
            var supplier = await GetSupplier(dto.SupplierId);
            var category = await GetCategory(dto.CategoryId);

            bill.Update(dto.Name, amount, dto.PaymentDate, dto.PaymentStatus, supplier, category);

            await _billRepository.Update(bill);
        }

        public async Task Delete(long id)
        {
            var bill = await GetBillById(id);
            await _billRepository.Delete(bill);
        }

        private async Task<Supplier> GetSupplier (long supplierId)
        {
            var supplier = await _supplierRepository.Get(supplierId);

            if (supplier == null)
            {
                throw new SupplierDoesntExistException();
            }

            return supplier;
        }

        private async Task<Supplier> GetSupplierByName(string name, string userId)
        {
            var supplier = await _supplierRepository.GetByName(name, userId);

            if (supplier == null)
            {
                supplier = _supplierFactory.Create(name, userId);
                await _supplierRepository.Add(supplier);
            }

            return supplier;
        }

        private async Task<Category> GetCategory(long categoryId)
        {
            var category = await _categoryRepository.Get(categoryId);
            if (category == null)
            {
                throw new CategoryDoesntExistException();
            }

            return category;
        }

        private async Task<Category> GetCategoryByName(string name, string userId)
        {
            var category = await _categoryRepository.GetByName(name, userId);
            if (category == null)
            {
                category = _categoryFactory.Create(name, userId);
                await _categoryRepository.Add(category);

            }

            return category;
        }

        private async Task<Bill> GetBillById(long id)
        {
            var bill = await _billRepository.Get(id);
            if (bill == null)
            {
                throw new BillDoesntExistException();
            }
            return bill;
        }
    }
}
