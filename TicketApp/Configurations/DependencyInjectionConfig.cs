namespace TicketApp.Configurations
{
    using Microsoft.Extensions.DependencyInjection;
    using Services;
    using System;
    using System.Linq;

    public static class DependencyInjectionConfig
    {
        public static void AddDependencyInjectionConfiguration(this IServiceCollection services)
        {
            ArgumentNullException.ThrowIfNull(argument: services);
            services.AddServices();
        }

        internal static IServiceCollection AddServices(this IServiceCollection services)
        {
            return services
                .AddServices(interfaceType: typeof(ITransientService), lifetime: ServiceLifetime.Transient)
                .AddServices(interfaceType: typeof(IScopedService), lifetime: ServiceLifetime.Scoped)
                .AddServices(interfaceType: typeof(ISingletonService), lifetime: ServiceLifetime.Singleton);
        }

        internal static IServiceCollection AddServices(this IServiceCollection services, Type interfaceType, ServiceLifetime lifetime)
        {
            var interfaceTypes =
                AppDomain.CurrentDomain.GetAssemblies()
                    .SelectMany(selector: s => s.GetTypes())
                    .Where(predicate: t => interfaceType.IsAssignableFrom(c: t) && t.IsClass && !t.IsAbstract)
                    .Select(selector: t => new
                    {
                        Service = t.GetInterfaces().FirstOrDefault(i => i != interfaceType && !i.IsGenericType),
                        Implementation = t
                    })
                    .Where(predicate: t => t.Service is not null && interfaceType.IsAssignableFrom(c: t.Service));

            foreach (var type in interfaceTypes)
            {
                services.AddService(type.Service!, type.Implementation, lifetime);
            }

            return services;
        }

        internal static IServiceCollection AddService(this IServiceCollection services, Type serviceType, Type implementationType, ServiceLifetime lifetime) =>
            lifetime switch
            {
                ServiceLifetime.Transient => services.AddTransient(serviceType: serviceType, implementationType: implementationType),
                ServiceLifetime.Scoped => services.AddScoped(serviceType: serviceType, implementationType: implementationType),
                ServiceLifetime.Singleton => services.AddSingleton(serviceType: serviceType, implementationType: implementationType),
                _ => throw new ArgumentException(message: "Invalid lifeTime", paramName: nameof(lifetime))
            };
    }
}
