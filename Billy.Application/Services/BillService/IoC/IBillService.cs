using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.Application.Resources;
using Billy.Application.Services.BillService.Dtos;
using Billy.Domain.Models;
using Billy.SharedKernel.PagedList;

namespace Billy.Application.Services.BillService.IoC
{
    public interface IBillService
    {
        Task<PagedList<Bill>> GetAll(GetAllBillsDto dto);
        Task Add(AddBillDto dto);
        Task Delete(long id);
        Task<BillResource> GetById(long id);
        Task Update(UpdateBillDto dto);
    }
}
