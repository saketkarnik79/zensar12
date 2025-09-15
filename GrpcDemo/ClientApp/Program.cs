using Grpc.Net.Client;
using Grpc.Core;
using ClientApp.Interceptors;
using Grpc.Core.Interceptors;
using GrpcDemo;

namespace ClientApp
{
    internal class Program
    {
        static async Task Main(string[] args)
        {
           var channel = GrpcChannel.ForAddress("https://localhost:7223");
            var invoker = channel.Intercept(new ClientLoggingInterceptor());
            var client = new Greeter.GreeterClient(invoker);

            try
            {
                var reply = await client.SayHelloAsync(new HelloRequest { Name = " " });
                Console.WriteLine($"Response: {reply.Message}");
            }
            catch (RpcException ex)
            {
                Console.WriteLine($"RPC Error: {ex.Status.Detail}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
            Console.ReadKey();
        }
    }
}
