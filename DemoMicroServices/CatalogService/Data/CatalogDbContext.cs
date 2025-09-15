using CatalogService.Models;
using Microsoft.EntityFrameworkCore;

namespace CatalogService.Data
{
    public class CatalogDbContext: DbContext
    {
        public DbSet<Product> Products { get; set; }

        public CatalogDbContext(DbContextOptions<CatalogDbContext> options) : base(options)
        {
        }
    }
}
