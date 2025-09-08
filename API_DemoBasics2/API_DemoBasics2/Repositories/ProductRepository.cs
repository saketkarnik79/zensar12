using API_DemoBasics2.Data;
using API_DemoBasics2.Models;

namespace API_DemoBasics2.Repositories
{
    public class ProductRepository: Repository<Product>, IProductRepository
    {
        public ProductRepository(ZenInventoryDbContext context) : base(context)
        {
            
        }
    }
}
