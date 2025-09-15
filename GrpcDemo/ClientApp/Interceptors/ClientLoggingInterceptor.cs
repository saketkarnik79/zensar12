using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Core.Interceptors;

namespace ClientApp.Interceptors
{
    public class ClientLoggingInterceptor : Interceptor
    {
        public override AsyncUnaryCall<TResponse> AsyncUnaryCall<TRequest, TResponse>(TRequest request, ClientInterceptorContext<TRequest, TResponse> context, AsyncUnaryCallContinuation<TRequest, TResponse> continuation)
        {
            Console.WriteLine($"Sending request: {context.Method.FullName} with payload: {request}");
            return continuation(request, context);
        }
    }
}
