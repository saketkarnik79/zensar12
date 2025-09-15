using Grpc.Net.Client;
using DemoGrpcService;
namespace ClientApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            //var channel=GrpcChannel.ForAddress("https://localhost:7058");
            //var client=new Greeter.GreeterClient(channel);
            //var reply=await client.SayHelloAsync(new HelloRequest { Name="Saket" });
            //Console.WriteLine(reply.Message);

            //var channel = GrpcChannel.ForAddress("https://localhost:7058");
            //var client = new WeatherService.WeatherServiceClient(channel);
            //var response = await client.GetCurrentWeatherAsync(new WeatherRequest { City = "Pune" });
            //Console.WriteLine($"City: {response.City}, Condition: {response.Condition}, Temperature in Celsius: {response.TemperatureCelsius}, Humidity: {response.HumidityPercent}");


            var channel = GrpcChannel.ForAddress("https://localhost:7058");
            var client = new WeatherService.WeatherServiceClient(channel);
            var response = await client.GetCurrentWeatherAsync(new WeatherRequest { City = "Pune" });
            Console.WriteLine($"City: {response.City}, Condition: {response.Condition}, Temperature in Celsius: {response.TemperatureCelsius}, Humidity: {response.HumidityPercent}");
            Console.ReadKey();
        }
    }
}
