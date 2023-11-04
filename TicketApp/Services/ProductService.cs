namespace TicketApp.Services
{
    using Models.Database;

    using TanvirArjel.EFCore.GenericRepository;

    public interface IProductService : IBaseService<Product>, ITransientService
    {
    }

    public class ProductService : BaseService<Product>, IProductService
    {
        public ProductService(IRepository repository) : base(repository)
        {
        }
    }
}
