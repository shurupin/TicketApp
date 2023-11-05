namespace TicketApp.Services
{
    using Mapster;
    using Microsoft.EntityFrameworkCore;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using System.Linq.Dynamic.Core;
    using System.Reflection;
    using TanvirArjel.EFCore.GenericRepository;
    using TicketApp.Extensions;

    public interface IBaseService<TDbEntity, TResponseModel, TListResponseModel>
    {
        Task<EntityList<TListResponseModel>> Get(string filters = "", string range = "", string sort = "");
        Task<TResponseModel?> Get(Guid id);
        Task<TResponseModel?> Update(TDbEntity entity);
        Task<TResponseModel> Create(TDbEntity entity);
        Task<bool?> Delete(Guid id);
    }
    public record EntityList<TListResponseModel>(List<TListResponseModel> List, int Count, int From, int To);

    public abstract class BaseService<TDbEntity, TResponseModel, TListResponseModel>
        : IBaseService<TDbEntity, TResponseModel, TListResponseModel> where TDbEntity : class, new()
    {
        protected readonly IRepository _repository;

        public BaseService(IRepository repository)
        {
            this._repository = repository;
        }

        //{"Category":"read"}
        public virtual async Task<EntityList<TListResponseModel>> Get(string filters = "", string range = "", string sort = "")
        {
            IQueryable<TDbEntity> entityQuery = this._repository.GetQueryable<TDbEntity>();

            if (filters.IsNotNullAndNotWhiteSpace())
            {
                JObject parsedFilters = JObject.Parse(json: filters);
                Dictionary<string, PropertyInfo> properties = typeof(TDbEntity).GetProperties().ToDictionary(keySelector: p => p.Name, elementSelector: p => p);
                foreach (KeyValuePair<string, JToken> filter in parsedFilters)
                {
                    string key = filter.Key.FirstLetterToUpper();
                    if (properties.TryGetValue(key: key, value: out PropertyInfo? propertyInfo))
                    {
                        object value = Convert.ChangeType(value: filter.Value, conversionType: propertyInfo.PropertyType);
                        if (propertyInfo.PropertyType == typeof(string))
                        {
                            entityQuery = entityQuery.Where(predicate: $"{propertyInfo.Name}.Contains(@0)", args: value);
                        }
                        else if (propertyInfo.PropertyType == typeof(DateTime))
                        {
                            DateTime date = (DateTime)value;
                            entityQuery = entityQuery.Where(predicate: $"{propertyInfo.Name} == @0", args: date.ToUniversalTime());
                        }
                        else
                        {
                            entityQuery = entityQuery.Where(predicate: $"{propertyInfo.Name} == @0", args: value);
                        }
                    }
                }
            }
            int count = await entityQuery.CountAsync();

            if (sort.IsNotNullAndNotWhiteSpace())
            {
                List<string> sortVal = JsonConvert.DeserializeObject<List<string>>(value: sort);
                string condition = sortVal.First();
                string order = sortVal.Last() == "ASC" ? "" : "descending";
                entityQuery = entityQuery.OrderBy(ordering: $"{condition} {order}");
            }

            int from = 0;
            int to = 0;
            if (range.IsNotNullAndNotWhiteSpace())
            {
                List<int> rangeVal = JsonConvert.DeserializeObject<List<int>>(value: range);
                from = rangeVal.First();
                to = rangeVal.Last();
                entityQuery = entityQuery.Skip<TDbEntity>(count: from).Take<TDbEntity>(count: to - from + 1);
            }

            List<TDbEntity> entityList = await entityQuery.ToListAsync();
            List<TListResponseModel> listResponseModel = entityList.Adapt<List<TListResponseModel>>();
            EntityList<TListResponseModel> result = new EntityList<TListResponseModel>(List: listResponseModel, Count: count, From: from, To: to);
            return result;
        }

        public virtual async Task<TResponseModel?> Get(Guid id)
        {
            TDbEntity? entity = await this._repository.GetByIdAsync<TDbEntity?>(id: id);
            TResponseModel responseModel = entity.Adapt<TResponseModel>();
            return responseModel;
        }

        public virtual async Task<TResponseModel?> Update(TDbEntity entity)
        {
            Guid entityId = (Guid)typeof(TDbEntity).GetProperty(name: "Id").GetValue(obj: entity);
            if (Guid.Empty == entityId || !await this.EntityExists(id: entityId))
            {
                return default;
            }

            this._repository.Add(entity: entity);
            await this._repository.SaveChangesAsync();
            TDbEntity result = await this._repository.GetByIdAsync<TDbEntity>(id: entityId);
            TResponseModel responseModel = result.Adapt<TResponseModel>();
            return responseModel;
        }

        public virtual async Task<TResponseModel> Create(TDbEntity entity)
        {
            PropertyInfo? idPropertyInfo = typeof(TDbEntity).GetProperty(name: "Id");
            Guid id = (Guid)idPropertyInfo.GetValue(obj: entity);
            if (id == Guid.Empty)
            {
                id = Guid.NewGuid();
                idPropertyInfo.SetValue(obj: entity, value: id);
            }

            this._repository.Add(entity: entity);
            await this._repository.SaveChangesAsync();

            TDbEntity result = await this._repository.GetByIdAsync<TDbEntity>(id: id);
            TResponseModel responseModel = result.Adapt<TResponseModel>();
            return responseModel;
        }

        public virtual async Task<bool?> Delete(Guid id)
        {
            TDbEntity entity = await this._repository.GetByIdAsync<TDbEntity>(id: id);
            if (entity == null)
            {
                return null;
            }

            this._repository.Remove(entity: entity);
            await this._repository.SaveChangesAsync();
            return true;
        }

        private async Task<bool> EntityExists(Guid id)
        {
            return await this._repository.ExistsAsync<TDbEntity>(condition: entity => (Guid)typeof(TDbEntity).GetProperty("Id").GetValue(entity) == id);
        }
    }
}
