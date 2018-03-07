using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.Application.Services.SupplierService.Dtos;

namespace Billy.Application.Services.SupplierService.IoC
{
    public interface ISupplierService
    {
        Task Add(AddSupplierDto dto);
        Task Delete(long id);
        Task<IList<GetSupplierDto>> GetAll();
        Task<GetSupplierDto> GetById(long id);
        Task Update(UpdateSupplierDto dto);
    }
}