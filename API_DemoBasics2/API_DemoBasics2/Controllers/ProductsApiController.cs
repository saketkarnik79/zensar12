using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using API_DemoBasics2.Data;
using API_DemoBasics2.Models;
using API_DemoBasics2.UnitOfWork;
using Microsoft.AspNetCore.Authorization;

namespace API_DemoBasics2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles ="PowerUsers", AuthenticationSchemes = "Bearer")]
    public class ProductsApiController : ControllerBase
    {
        //private readonly ZenInventoryDbContext _context;
        private readonly IUnitOfWork _unitOfWork;
        
        //public ProductsApiController(ZenInventoryDbContext context)
        //{
        //    _context = context;
        //}

        public ProductsApiController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        // GET: api/ProductsApi
        [HttpGet]
        //[AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            //return await _context.Products.ToListAsync();
            var products = await _unitOfWork.Products.GetAllAsync();
            return Ok(products);
        }

        // GET: api/ProductsApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            //var product = await _context.Products.FindAsync(id);
            var product = await _unitOfWork.Products.GetByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // PUT: api/ProductsApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(Guid id, Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            //_context.Entry(product).State = EntityState.Modified;
            //_context.Products.Update(product);
            await _unitOfWork.Products.UpdateAsync(product);

            try
            {
               //await _context.SaveChangesAsync();
                await _unitOfWork.CommitChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                //if (!ProductExists(id))
                if (!await ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductsApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Product>> PostProduct(Product product)
        {
            //_context.Products.Add(product);
            //await _context.SaveChangesAsync();
            await _unitOfWork.Products.AddAsync(product);
            await _unitOfWork.CommitChangesAsync();

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        // DELETE: api/ProductsApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            //var product = await _context.Products.FindAsync(id);
            var product = await _unitOfWork.Products.GetByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            //_context.Products.Remove(product);
            //await _context.SaveChangesAsync();
            await _unitOfWork.Products.DeleteAsync(product);
            await _unitOfWork.CommitChangesAsync();

            //return NoContent();
            return Ok(product);
        }

        private async Task<bool> ProductExists(Guid id)
        {
            //return _context.Products.Any(e => e.Id == id);
            var products = await _unitOfWork.Products.GetAllAsync();
            return products.Any(e => e.Id == id);
        }
    }
}
