namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using Models.Database;

    using Services;

    [ApiController]
    [Route(template: "[controller]")]
    public class ProductController : BaseController<Product>
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService) : base(productService)
        {
            this._productService = productService;
        }
    }
}
