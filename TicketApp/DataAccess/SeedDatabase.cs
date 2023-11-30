namespace TicketApp.DataAccess
{
    using AutoFixture;
    using TicketApp.Models.Database;

    public static class DatabaseSeeder
    {
        public static void SeedTestData(AppDbContext dbContext)
        {
            Fixture fixture = new Fixture();
            fixture.Customize<DateTime>(c => c.FromFactory(() => DateTime.UtcNow.AddSeconds(new Random().Next(-7776000, 7776000)))); //+-90 days

            #region Add test Products
            List<Guid> predefinedIds = new List<Guid>
            {
                new("bb98774f-8462-4309-b61b-f265881e10be"),
                new("bcc71692-6527-49bd-87c5-2fa33192f2e9"),
                new("accf6fb4-0c0c-4999-ba5e-3f18680375b0"),
                new("f1900ebd-9a16-4f4c-9426-15c51e617521"),
                new("e8c358ec-c970-43a3-b3fc-684367ea4231")
            };
            List<Guid> existingIds = dbContext.Products.Where(x => predefinedIds.Contains(x.Id)).Select(x => x.Id).ToList();

            List<Product> productsToAdd = fixture.CreateMany<Product>(predefinedIds.Count)
                .Select((product, index) =>
                {
                    product.Id = predefinedIds[index];
                    return product;
                })
                .Where(product => !existingIds.Contains(product.Id))
                .ToList();
            if (productsToAdd.Any())
            {
                dbContext.Products.AddRange(productsToAdd);
                dbContext.SaveChanges();
            }
            #endregion
        }
    }
}