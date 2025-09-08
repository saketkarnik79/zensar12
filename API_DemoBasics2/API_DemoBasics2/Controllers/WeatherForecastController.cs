using Microsoft.AspNetCore.Mvc;

namespace API_DemoBasics2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var forecasts = Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();

            return Ok(forecasts);
        }

        [HttpGet]
        [Route("GetGreeting")]
        public IActionResult GetGreeting()
        {
            return Ok("Hello, welcome to the Weather Forecast API!");
        }

        [HttpGet("Add/{n1:int}/{n2:int?}")]
        public IActionResult Add(int n1, int? n2)
        {
            int result = n1 + (n2 ?? 0);
            return Ok($"The result of adding {n1} and {n2 ?? 0} is {result}");
        }
    }
}
