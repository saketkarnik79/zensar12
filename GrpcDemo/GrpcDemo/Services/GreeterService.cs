using Grpc.Core;
using GrpcDemo;

namespace GrpcDemo.Services
{
    public class GreeterService : Greeter.GreeterBase
    {
        public override Task<HelloReply> SayHello(HelloRequest request, ServerCallContext context)
        {
            if (string.IsNullOrWhiteSpace(request.Name))
            {
                throw new RpcException(new Status(StatusCode.InvalidArgument, "Name is required."));
            }
            var message = $"Hello, {request.Name}!";
            return Task.FromResult(new HelloReply { Message = message });
        }
    }
}
