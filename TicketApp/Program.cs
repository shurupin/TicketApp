namespace TicketApp
{
    using Configurations;

    using DataAccess;

    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;

    using Models.Database;

    using NextjsStaticHosting.AspNetCore;

    using TanvirArjel.EFCore.GenericRepository;

    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args: args);
            IConfiguration configuration = builder.Configuration;

            // Add services to the container.
            builder.Services.AddControllers(configure: options =>
            {
                options.Filters.Add<ValidateModelStateAttribute>();
            });
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Authentication and authorization
            builder.Services.AddAuthentication().AddBearerToken(authenticationScheme: IdentityConstants.BearerScheme);
            builder.Services.AddAuthorizationBuilder();

            // Database
            builder.Services.AddDbContext<AppDbContext>(
                optionsAction: optionsAction => optionsAction.UseNpgsql(
                    connectionString: configuration.GetConnectionString(name: "DefaultConnection")));

            // Repository
            builder.Services.AddGenericRepository<AppDbContext>();

            // Dependency Injection and Services
            builder.Services.AddDependencyInjectionConfiguration();

            // Registration and Authorization API Endpoints
            builder.Services.AddIdentityCore<User>()
                .AddEntityFrameworkStores<AppDbContext>()
                .AddApiEndpoints();

            // Step 1: Add Next.js hosting support
            builder.Services.Configure<NextjsStaticHostingOptions>(config: builder.Configuration.GetSection(key: "NextjsStaticHosting"));
            builder.Services.AddNextjsStaticHosting();

            WebApplication app = builder.Build();

            // Apply migrations to the latest
            using (IServiceScope scope = app.Services.CreateScope())
            {
                AppDbContext dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
                dbContext.Database.Migrate();
                DatabaseSeeder.SeedTestData(dbContext);
            }

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
