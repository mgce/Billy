using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Application.Services.BillService.Exceptions;
using Billy.Application.Services.BillService.IoC;
using Billy.Domain.Factories;
using Billy.Domain.Models;
using Billy.Domain.Repositories;

namespace Billy.Application.Services.BillService
{
    public class BillService : IBillService
    {
        private readonly IBillRepository _billRepository;
        private readonly ISupplierRepository _supplierRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IBillFactory _billFactory;

        public BillService(IBillRepository billRepository,
            ISupplierRepository supplierRepository,
            ICategoryRepository categoryRepository,
            IBillFactory billFactory)
        {
            _billRepository = billRepository;
            _supplierRepository = supplierRepository;
            _categoryRepository = categoryRepository;
            _billFactory = billFactory;
        }

        public async Task<GetBillDto> GetBill(long id)
        {
            var bill = await GetBillById(id);
            return new GetBillDto
            {
                BillId = bill.Id,
                Name = bill.Name,
                AmountValue = bill.Amount?.Value ?? 0,
                Currency = bill.Amount?.Currency ?? 0,
                Supplier = bill.Supplier,
                Category = bill.Category,
                PaymentDate = bill.PaymentDate
            };
        }

        public async Task<IEnumerable<GetBillDto>> GetAllBills()
        {
            var bills = await _billRepository.GetAll();
            return bills.Select(x => new GetBillDto
            {
                Name = x.Name
            }).ToList();
        }

        public async Task AddBill(AddBillDto dto)
        {
            var amount = new Amount(dto.AmountValue, dto.Currency);
            var supplier = await GetSupplier(dto.SupplierId);
            var category = await GetCategory(dto.CategoryId);

            var bill = _billFactory.Create(dto.Name, amount, dto.PaymentDate, supplier, category);

            await _billRepository.Add(bill);
        }

        public async Task UpdateBill(UpdateBillDto dto)
        {
            var bill = await _billRepository.Get(dto.BillId);
            var amount = new Amount(dto.AmountValue, dto.Currency);
            var supplier = await GetSupplier(dto.SupplierId);
            var category = await GetCategory(dto.CategoryId);

            bill.Update(dto.Name, amount, dto.PaymentDate, dto.PaymentStatus, supplier, category);

            await _billRepository.Update(bill);
        }

        public async Task DeleteBill(DeleteBillDto dto)
        {
            var bill = await GetBillById(dto.BillId);
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

        private async Task<Category> GetCategory(long categoryId)
        {
            var category = await _categoryRepository.Get(categoryId);
            if (category == null)
            {
                throw new CategoryDoesntExistException();
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
