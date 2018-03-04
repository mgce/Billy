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

        public async Task<GetBillDto> GetBill(GetBillDto dto)
        {
            var bill = await GetBill(dto.BillId);
            return new GetBillDto
            {
                BillId = bill.Id,
                Name = bill.Name,
                AmountValue = bill.Amount.Value,
                Currency = bill.Amount.Currency,
                Supplier = bill.Supplier,
                Category = bill.Category,
                PaymentDate = bill.PaymentDate
            };
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

            bill.Update(dto.Name, amount, dto.PaymentDate, supplier, category);

            await _billRepository.Update(bill);
        }

        public async Task DeleteBill(DeleteBillDto dto)
        {
            var bill = await GetBill(dto.BillId);
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

        private async Task<Bill> GetBill(long billId)
        {
            var bill = await _billRepository.Get(billId);
            if (bill == null)
            {
                throw new BillDoesntExistException();
            }
            return bill;
        }
    }
}
