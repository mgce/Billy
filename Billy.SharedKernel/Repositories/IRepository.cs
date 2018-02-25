using System.Collections.Generic;
using System.Threading.Tasks;
using Billy.SharedKernel.Domain;

namespace Billy.SharedKernel.Repositories
{
    public interface IRepository<T> where T : BaseEntity
    {
        Task<T> Get(T entity);
        Task<IEnumerable<T>> GetAll();
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}
