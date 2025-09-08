using API_DemoBasics2.Data;
using API_DemoBasics2.Repositories;

namespace API_DemoBasics2.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ZenInventoryDbContext _context;

        public UnitOfWork(ZenInventoryDbContext context, IProductRepository products)
        {
            _context = context;
            Products = products;
        }

        public IProductRepository Products { get; private set; }

        public async Task<int> CommitChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
