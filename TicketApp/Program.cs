namespace TicketApp
{
    using DataAccess;

    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;

    using Models.Database;

    using NextjsStaticHosting.AspNetCore;

    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Authentication and authorization
            builder.Services.AddAuthentication().AddBearerToken(IdentityConstants.BearerScheme);
            builder.Services.AddAuthorizationBuilder();

            // Database TODO: apply postgres:
            //builder.Services.AddDbContext<AppDbContext>(x => x.UseSqlite("DataSource=app.db"));

            // Add Registration and Authorization API Endpoints
            builder.Services.AddIdentityCore<User>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddApiEndpoints();

            // Step 1: Add Next.js hosting support
            builder.Services.Configure<NextjsStaticHostingOptions>(builder.Configuration.GetSection("NextjsStaticHosting"));
            builder.Services.AddNextjsStaticHosting();

            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();//TODO: to check is app.UseAuthorization() needed?
            app.MapIdentityApi<User>();

            app.MapControllers();

            // Step 2: Register dynamic endpoints to serve the correct HTML files at the right request paths.
            app.MapNextjsStaticHtmls();
            // Step 3: Serve other required files (e.g. js, css files in the exported next.js app).
            app.UseNextjsStaticHosting();

            app.Run();
        }
    }
}
