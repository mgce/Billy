using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Domain.Models;

namespace Billy.Application.Services.BillService.IoC
{
    public interface IBillService
    {
        Task<IEnumerable<GetBillDto>> GetAllBills();
        Task AddBill(AddBillDto dto);
        Task DeleteBill(DeleteBillDto dto);
        Task<GetBillDto> GetBill(long id);
        Task UpdateBill(UpdateBillDto dto);
    }
}
