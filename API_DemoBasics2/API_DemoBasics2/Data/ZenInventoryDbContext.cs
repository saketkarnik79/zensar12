using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using API_DemoBasics2.Models;
using Microsoft.AspNetCore.Identity;

namespace API_DemoBasics2.Data
{
    //public class ZenInventoryDbContext: DbContext
    public class ZenInventoryDbContext: IdentityDbContext<IdentityUser>
    {
        public DbSet<Product> Products { get; set; }

        public ZenInventoryDbContext(DbContextOptions<ZenInventoryDbContext> options) : base(options)
        {
        }
    }
}
