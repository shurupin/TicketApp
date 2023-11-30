namespace TicketApp.Services
{
    using Models.Database;

    using TanvirArjel.EFCore.GenericRepository;
    using TicketApp.Models.Dto;

    public interface IProductService : IBaseService<Product, ProductRequestResponseModel, ProductListResponseModel>, ITransientService
    {
    }

    public class ProductService : BaseService<Product, ProductRequestResponseModel, ProductListResponseModel>, IProductService
    {
        private readonly IRepository _repository;

        public ProductService(IRepository repository) : base(repository: repository)
        {
            this._repository = repository;
        }
    }
}
