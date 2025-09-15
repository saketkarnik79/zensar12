using DemoGrpcService;
using Grpc.Core;
namespace DemoGrpcService.Services
{
    public class WeatherServiceImpl: WeatherService.WeatherServiceBase
    {
        public override async Task GetForecast(WeatherRequest request, IServerStreamWriter<WeatherResponse> responseStream, ServerCallContext context)
        {
            var updates=new[]
            {
                new WeatherResponse{Condition="Sunny",Temperature=25},
                new WeatherResponse{Condition="Cloudy",Temperature=22},
                new WeatherResponse{Condition="Rainy",Temperature=18},
                new WeatherResponse{Condition="Stormy",Temperature=20},
            };
            foreach(var update in updates)
            {
                await responseStream.WriteAsync(update);
                await Task.Delay(1000); // Simulate delay between updates
            }
        }
    }
}
