using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.SharedKernel.Domain;

namespace Billy.SharedKernel.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> Get(long id);
        Task<IEnumerable<T>> GetAll();
        Task Add(T entity);
        Task Update(T entity);
        Task Delete(T entity);
    }
}
