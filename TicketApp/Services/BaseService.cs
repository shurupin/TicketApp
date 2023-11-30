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

    public interface IBaseService<TDbEntity, TRequestResponseModel, TListResponseModel>
    {
        Task<EntityList<TListResponseModel>> Get(string filters = "", string range = "", string sort = "");
        Task<TRequestResponseModel?> Get(Guid id);
        void BeforeUpdate(TRequestResponseModel requestModel, TDbEntity entity);
        Task<TRequestResponseModel?> Update(TRequestResponseModel requestModel);
        void BeforeCreate(TRequestResponseModel requestModel, TDbEntity entity);
        Task<TRequestResponseModel> Create(TRequestResponseModel requestModel);
        Task<bool?> Delete(Guid id);
    }
    public record EntityList<TListResponseModel>(List<TListResponseModel> List, int Count, int From, int To);

    public abstract class BaseService<TDbEntity, TRequestResponseModel, TListResponseModel> : IBaseService<TDbEntity, TRequestResponseModel, TListResponseModel> where TDbEntity : class, new()
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

        public virtual async Task<TRequestResponseModel?> Get(Guid id)
        {
            TDbEntity? entity = await this._repository.GetByIdAsync<TDbEntity?>(id: id);
            TRequestResponseModel responseModel = entity.Adapt<TRequestResponseModel>();
            return responseModel;
        }

        public void BeforeUpdate(TRequestResponseModel requestModel, TDbEntity entity)
        {
            PropertyInfo? updatedAtPropertyInfo = typeof(TDbEntity).GetProperty(name: "UpdatedAt");
            if (updatedAtPropertyInfo != null)
            {
                updatedAtPropertyInfo.SetValue(obj: entity, value: DateTime.UtcNow);
            }
        }

        public virtual async Task<TRequestResponseModel?> Update(TRequestResponseModel requestModel)
        {
            PropertyInfo idPropertyInfo = typeof(TRequestResponseModel).GetProperty(name: "Id")!;
            Guid id = (Guid)idPropertyInfo.GetValue(obj: requestModel)!;
            if (id == Guid.Empty)
            {
                return default;
            }
            TDbEntity? existedEntity = await this._repository.GetByIdAsync<TDbEntity?>(id: id);
            if (existedEntity == null)
            {
                return default;
            }

            TDbEntity entity = requestModel.Adapt<TRequestResponseModel, TDbEntity>(existedEntity);
            this.BeforeUpdate(requestModel, entity);
            await this._repository.AddAsync(entity: entity);
            await this._repository.SaveChangesAsync();
            TDbEntity result = await this._repository.GetByIdAsync<TDbEntity>(id: id);
            TRequestResponseModel responseModel = result.Adapt<TRequestResponseModel>();
            return responseModel;
        }

        public virtual void BeforeCreate(TRequestResponseModel requestModel, TDbEntity entity)
        {
            PropertyInfo? createdAtPropertyInfo = typeof(TDbEntity).GetProperty(name: "CreatedAt");
            if (createdAtPropertyInfo != null)
            {
                createdAtPropertyInfo.SetValue(obj: entity, value: DateTime.UtcNow);
            }
        }

        public virtual async Task<TRequestResponseModel> Create(TRequestResponseModel requestModel)
        {
            PropertyInfo idPropertyInfo = typeof(TRequestResponseModel).GetProperty(name: "Id")!;
            Guid id = (Guid)idPropertyInfo.GetValue(obj: requestModel)!;
            if (id == Guid.Empty)
            {
                id = Guid.NewGuid();
                idPropertyInfo.SetValue(obj: requestModel, value: id);
            }

            TDbEntity entity = requestModel.Adapt<TDbEntity>();
            this.BeforeCreate(requestModel, entity);
            await this._repository.AddAsync(entity: entity);
            await this._repository.SaveChangesAsync();
            TDbEntity result = await this._repository.GetByIdAsync<TDbEntity>(id: id);
            TRequestResponseModel responseModel = result.Adapt<TRequestResponseModel>();
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
