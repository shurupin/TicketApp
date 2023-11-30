namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using Models.Database;

    using Services;
    using TicketApp.Models.Dto;

    [ApiController]
    [Route(template: "[controller]")]
    public class ProductController : BaseController<Product, ProductRequestResponseModel, ProductListResponseModel>
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService) : base(baseService: productService)
        {
            this._productService = productService;
        }
    }
}
