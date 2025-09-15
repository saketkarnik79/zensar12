using OrderService.Models;
using Microsoft.EntityFrameworkCore;

namespace OrderService.Data
{
    public class OrderDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public OrderDbContext(DbContextOptions<OrderDbContext> options)
            : base(options)
        {
            
        }
    }
}
