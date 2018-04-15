using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.Application.Services.BillService.Dtos;
using Billy.Domain.Models;

namespace Billy.Application.Services.BillService.IoC
{
    public interface IBillService
    {
        Task<IEnumerable<GetBillDto>> GetAll(string userId);
        Task Add(AddBillDto dto);
        Task Delete(long id);
        Task<GetBillDto> GetById(long id);
        Task Update(UpdateBillDto dto);
    }
}
