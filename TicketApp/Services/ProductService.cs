namespace TicketApp.Services
{
    using Models.Database;

    using TanvirArjel.EFCore.GenericRepository;
    using TicketApp.Models.Dto;

    public interface IProductService : IBaseService<Product, ProductResponseModel, ProductListResponseModel>, ITransientService
    {
    }

    public class ProductService : BaseService<Product, ProductResponseModel, ProductListResponseModel>, IProductService
    {
        private readonly IRepository _repository;

        public ProductService(IRepository repository) : base(repository: repository)
        {
            this._repository = repository;
        }
    }
}
