namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using TicketApp.Services;

    public interface IBaseController<T>
    {
        Task<ActionResult<List<T>>> Get(string filters = "", string range = "", string sort = "");
        Task<ActionResult<T>> Get(Guid id);
        Task<ActionResult<T>> Put(T entity);
        Task<ActionResult<T>> Post(T entity);
        Task<ActionResult<T>> Delete(Guid id);
    }

    [ApiController]
    [Route(template: "[controller]")]
    public abstract class BaseController<T> : ControllerBase, IBaseController<T> where T : class, new()
    {
        protected readonly IBaseService<T> _baseService;

        public BaseController(IBaseService<T> baseService)
        {
            this._baseService = baseService;
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult<T>> Delete(Guid id)
        {
            T entity = await this._baseService.Delete(id);
            if (entity == null)
            {
                return this.NotFound();
            }

            return this.Ok(entity);
        }

        //{"Category":"read"}
        [HttpGet]
        public virtual async Task<ActionResult<List<T>>> Get(string filters = "", string range = "", string sort = "")
        {
            EntityList<T> result = await this._baseService.Get(filters, range, sort);
            this.Response.Headers.Add("Access-Control-Expose-Headers", "Content-Range");
            this.Response.Headers.Add("Content-Range", $"{typeof(T).Name.ToLower()} {result.From}-{result.To}/{result.Count}");
            return result.List;
        }

        [HttpGet("{id}")]
        public virtual async Task<ActionResult<T>> Get(Guid id)
        {
            T entity = await this._baseService.Get(id);

            if (entity == null)
            {
                return this.NotFound();
            }

            return entity;
        }

        [HttpPost]
        public virtual async Task<ActionResult<T>> Post(T entity)
        {
            T result = await this._baseService.Create(entity);
            return this.Ok(result);
        }

        [HttpPut("{id}")]
        public virtual async Task<ActionResult<T>> Put(T entity)
        {
            T result = await this._baseService.Update(entity);
            if (result == null)
            {
                return this.NotFound();
            }

            return this.Ok(result);
        }
    }
}
