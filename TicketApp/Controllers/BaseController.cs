namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using TicketApp.Services;

    public interface IBaseController<TDbEntity, TResponseModel, TListResponseModel>
    {
        Task<ActionResult<List<TListResponseModel>>> Get(string filters = "", string range = "", string sort = "");
        Task<ActionResult<TResponseModel>> Get(Guid id);
        /// <summary> Update </summary>
        Task<ActionResult<TResponseModel>> Put(TDbEntity entity);
        /// <summary> Create </summary>
        Task<ActionResult<TResponseModel>> Post(TDbEntity entity);
        Task<ActionResult<bool?>> Delete(Guid id);
    }

    [ApiController]
    [Route(template: "[controller]")]
    public abstract class BaseController<TDbEntity, TResponseModel, TListResponseModel>
        : ControllerBase, IBaseController<TDbEntity, TResponseModel, TListResponseModel> where TDbEntity : class, new()
    {
        protected readonly IBaseService<TDbEntity, TResponseModel, TListResponseModel> _baseService;

        public BaseController(IBaseService<TDbEntity, TResponseModel, TListResponseModel> baseService)
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
            this.Response.Headers.Add(key: "Access-Control-Expose-Headers", value: "Content-Range");
            this.Response.Headers.Add(key: "Content-Range", value: $"{typeof(TDbEntity).Name.ToLower()} {result.From}-{result.To}/{result.Count}");
            return this.Ok(value: result.List);
        }

        [HttpGet(template: "{id}")]
        public virtual async Task<ActionResult<TResponseModel>> Get(Guid id)
        {
            TResponseModel? responseModel = await this._baseService.Get(id: id);

            if (responseModel == null)
            {
                return this.NotFound();
            }

            return this.Ok(value: responseModel);
        }

        /// <summary> Create </summary>
        [HttpPost]
        public virtual async Task<ActionResult<TResponseModel>> Post(TDbEntity entity)
        {
            TResponseModel responseModel = await this._baseService.Create(entity: entity);
            return this.Ok(value: responseModel);
        }

        /// <summary> Update </summary>
        [HttpPut]
        public virtual async Task<ActionResult<TResponseModel>> Put(TDbEntity entity)
        {
            TResponseModel? responseModel = await this._baseService.Update(entity: entity);
            if (responseModel == null)
            {
                return this.NotFound();
            }

            return this.Ok(value: responseModel);
        }
    }
}
