using Ocelot.DependencyInjection; 
using Ocelot.Middleware;

namespace ApiGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.Configuration.AddJsonFile("OcelotConfig.json");

            // Add services to the container.
            builder.Services.AddOcelot();
            builder.Services.AddControllers();

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseAuthorization();


            //app.MapControllers();
            app.UseOcelot();

            app.Run();
        }
    }
}
