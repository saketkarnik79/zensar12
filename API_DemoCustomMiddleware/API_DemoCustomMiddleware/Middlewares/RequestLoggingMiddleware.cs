﻿using Microsoft.AspNetCore.Http;

namespace API_DemoCustomMiddleware.Middlewares
{
    public class RequestLoggingMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestLoggingMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            // Log the incoming request details
            Console.WriteLine($"Incoming Request: {context.Request.Method} {context.Request.Path}");
            // Call the next middleware in the pipeline
            await _next(context);
            // Log the outgoing response details
            Console.WriteLine($"Outgoing Response: {context.Response.StatusCode}");
        }
    }

    public static class RequestLoggingMiddlewareExtensions
    {
        public static IApplicationBuilder UseRequestLogging(this IApplicationBuilder app)
        {
            return app.UseMiddleware<RequestLoggingMiddleware>();
        }
    }
}
