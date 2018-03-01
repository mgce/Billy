using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Billy.Domain.Repositories;
using Billy.SharedKernel.Domain;
using Billy.SharedKernel.Repositories;
using Microsoft.EntityFrameworkCore;

namespace Billy.Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : BaseEntity
    {
        private readonly DataContext _context;

        public Repository(DataContext dataContext)
        {
            _context = dataContext;
        }

        public async Task<T> Get(T entity)
        {
            return await _context.Set<T>().SingleOrDefaultAsync(x => x == entity);
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async void Add(T entity)
        {
            await _context.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async void Update(T entity)
        {
            if (entity == null)
            {
                return;
            }
            var existing = GetById(entity.Id);
            if (existing != null)
            {
                _context.Entry(existing).CurrentValues.SetValues(entity);
                await _context.SaveChangesAsync();
            }
        }

        public void Delete(T entity)
        {
            entity.Delete();
            Update(entity);
        }

        private async Task<T> GetById(long id)
        {
            return await _context.Set<T>().SingleOrDefaultAsync(x => x.Id == id);
        }
    }
}
