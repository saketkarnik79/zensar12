using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DataLib;
namespace ConsumerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataApiController : ControllerBase
    {
        private readonly IDataProvider _dataProvider;

        public DataApiController(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        [HttpGet]
        public IActionResult GetData()
        {
            var data = _dataProvider.GetData();
            return Ok(data);
        }
    }
}
