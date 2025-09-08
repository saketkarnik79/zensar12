using API_DemoBasics2.Data;
using Microsoft.EntityFrameworkCore;

namespace API_DemoBasics2.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly ZenInventoryDbContext _context;

        public Repository(ZenInventoryDbContext context)
        {
            _context = context;
        }

        public Task AddAsync(TEntity entity)
        {
            // Implementation for adding an entity to the database
            _context.Add(entity);
            return Task.CompletedTask;
        }

        public Task DeleteAsync(TEntity entity)
        {
            // Implementation for deleting an entity from the database by id

            _context.Remove(entity);
            return Task.CompletedTask;
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            // Implementation for retrieving all entities from the database
            return await _context.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity?> GetByIdAsync(Guid id)
        {
            // Implementation for retrieving an entity by id from the database
            return await _context.Set<TEntity>().FindAsync(id);
        }

        public Task UpdateAsync(TEntity entity)
        {
            // Implementation for updating an entity in the database
            _context.Update(entity);
            return Task.CompletedTask;
        }
    }
}
