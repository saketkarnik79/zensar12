using Grpc.Net.Client;
using DemoGrpcService;
namespace ClientApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
            var channel=GrpcChannel.ForAddress("https://localhost:7058");
            var client=new Greeter.GreeterClient(channel);
            var reply=await client.SayHelloAsync(new HelloRequest { Name="Saket" });
            Console.WriteLine(reply.Message);
            Console.ReadKey();
        }
    }
}
