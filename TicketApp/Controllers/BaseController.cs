namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using TicketApp.Services;

    public interface IBaseController<TDbEntity, TRequestResponseModel, TListResponseModel>
    {
        Task<ActionResult<List<TListResponseModel>>> Get(string filters = "", string range = "", string sort = "");
        Task<ActionResult<TRequestResponseModel>> Get(Guid id);
        /// <summary> Update </summary>
        Task<ActionResult<TRequestResponseModel>> Put(TRequestResponseModel requestModel);
        /// <summary> Create </summary>
        Task<ActionResult<TRequestResponseModel>> Post(TRequestResponseModel requestModel);
        Task<ActionResult<bool?>> Delete(Guid id);
    }

    [ApiController]
    [Route(template: "[controller]")]
    public abstract class BaseController<TDbEntity, TRequestResponseModel, TListResponseModel> : ControllerBase, IBaseController<TDbEntity, TRequestResponseModel, TListResponseModel> where TDbEntity : class, new()
    {
        protected readonly IBaseService<TDbEntity, TRequestResponseModel, TListResponseModel> _baseService;

        public BaseController(IBaseService<TDbEntity, TRequestResponseModel, TListResponseModel> baseService)
        {
            this._baseService = baseService;
        }

        [HttpDelete(template: "{id}")]
        public virtual async Task<ActionResult<bool?>> Delete(Guid id)
        {
            bool? isFoundAndDeleted = await this._baseService.Delete(id: id);
            if (isFoundAndDeleted == null)
            {
                return this.NotFound();
            }

            return this.Ok(value: isFoundAndDeleted);
        }

        //{"Category":"read"}
        [HttpGet]
        public virtual async Task<ActionResult<List<TListResponseModel>>> Get(string filters = "", string range = "", string sort = "")
        {
            EntityList<TListResponseModel> result = await this._baseService.Get(filters: filters, range: range, sort: sort);
            this.Response.Headers.TryAdd(key: "From", value: result.From.ToString());
            this.Response.Headers.TryAdd(key: "To", value: result.To.ToString());
            this.Response.Headers.TryAdd(key: "Count", value: result.Count.ToString());
            return this.Ok(value: result.List);
        }

        [HttpGet(template: "{id}")]
        public virtual async Task<ActionResult<TRequestResponseModel>> Get(Guid id)
        {
            TRequestResponseModel? responseModel = await this._baseService.Get(id: id);

            if (responseModel == null)
            {
                return this.NotFound();
            }

            return this.Ok(value: responseModel);
        }

        /// <summary> Create </summary>
        [HttpPost]
        public virtual async Task<ActionResult<TRequestResponseModel>> Post(TRequestResponseModel requestModel)
        {
            TRequestResponseModel responseModel = await this._baseService.Create(requestModel: requestModel);
            return this.Ok(value: responseModel);
        }

        /// <summary> Update </summary>
        [HttpPut]
        public virtual async Task<ActionResult<TRequestResponseModel>> Put(TRequestResponseModel requestModel)
        {
            TRequestResponseModel? responseModel = await this._baseService.Update(requestModel: requestModel);
            if (responseModel == null)
            {
                return this.NotFound();
            }

            return this.Ok(value: responseModel);
        }
    }
}
