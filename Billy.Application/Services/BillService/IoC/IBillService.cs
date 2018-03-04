using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;

namespace Billy.Application.Services.BillService.IoC
{
    public interface IBillService
    {
        Task AddBill(AddBillDto dto);
        Task DeleteBill(DeleteBillDto dto);
        Task<GetBillDto> GetBill(GetBillDto dto);
        Task UpdateBill(UpdateBillDto dto);
    }
}
