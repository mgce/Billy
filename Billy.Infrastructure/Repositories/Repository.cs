using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Repositories;
using Billy.SharedKernel.Models;
using Billy.SharedKernel.PagedList;
using Billy.SharedKernel.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Billy.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        public readonly DataContext _context;

        public Repository(DataContext dataContext)
        {
            _context = dataContext;
        }

        public async Task<T> Get(long id)
        {
            return await GetAllAsQuery().SingleOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await GetAllAsQuery().ToListAsync();
        }


        public async Task Add(T entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Update(T entity)
        {
            if (entity == null)
            {
                return;
            }
            entity.SetModifiedDate();
            _context.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task Delete(T entity)
        {
            entity.Delete();
            await Update(entity);
        }

        private IQueryable<T> GetAllAsQuery()
        {
            var query = _context.Set<T>().AsQueryable();
            //loading all related entities
            foreach (var property in _context.Model.FindEntityType(typeof(T)).GetNavigations())
            {
                query = query.Include(property.Name);
            }
            return query;
        }
    }
}
