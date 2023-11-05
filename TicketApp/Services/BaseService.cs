namespace TicketApp.Services
{
    using Microsoft.EntityFrameworkCore;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Linq;
    using System.Linq.Dynamic.Core;
    using System.Reflection;
    using TanvirArjel.EFCore.GenericRepository;
    using TicketApp.Extensions;

    public interface IBaseService<T>
    {
        Task<EntityList<T>> Get(string filters = "", string range = "", string sort = "");
        Task<T> Get(Guid id);
        Task<T> Update(T entity);
        Task<T> Create(T entity);
        Task<T> Delete(Guid id);
    }
    public record EntityList<T>(List<T> List, int Count, int From, int To);

    public abstract class BaseService<T> : IBaseService<T> where T : class, new()
    {
        protected readonly IRepository _repository;

        public BaseService(IRepository repository)
        {
            this._repository = repository;
        }

        //{"Category":"read"}
        public virtual async Task<EntityList<T>> Get(string filters = "", string range = "", string sort = "")
        {
            IQueryable<T> entityQuery = this._repository.GetQueryable<T>();

            if (filters.IsNotNullAndNotWhiteSpace())
            {
                JObject parsedFilters = JObject.Parse(filters);
                Dictionary<string, PropertyInfo> properties = typeof(T).GetProperties().ToDictionary(p => p.Name, p => p);
                foreach (KeyValuePair<string, JToken> filter in parsedFilters)
                {
                    string key = filter.Key.FirstLetterToUpper();
                    if (properties.TryGetValue(key, out PropertyInfo? propertyInfo))
                    {
                        object value = Convert.ChangeType(filter.Value, propertyInfo.PropertyType);
                        if (propertyInfo.PropertyType == typeof(string))
                        {
                            entityQuery = entityQuery.Where($"{propertyInfo.Name}.Contains(@0)", value);
                        }
                        else if (propertyInfo.PropertyType == typeof(DateTime))
                        {
                            DateTime date = (DateTime)value;
                            entityQuery = entityQuery.Where($"{propertyInfo.Name} == @0", date.ToUniversalTime());
                        }
                        else
                        {
                            entityQuery = entityQuery.Where($"{propertyInfo.Name} == @0", value);
                        }
                    }
                }
            }
            int count = await entityQuery.CountAsync();

            if (sort.IsNotNullAndNotWhiteSpace())
            {
                List<string> sortVal = JsonConvert.DeserializeObject<List<string>>(sort);
                string condition = sortVal.First();
                string order = sortVal.Last() == "ASC" ? "" : "descending";
                entityQuery = entityQuery.OrderBy($"{condition} {order}");
            }

            int from = 0;
            int to = 0;
            if (range.IsNotNullAndNotWhiteSpace())
            {
                List<int> rangeVal = JsonConvert.DeserializeObject<List<int>>(range);
                from = rangeVal.First();
                to = rangeVal.Last();
                entityQuery = entityQuery.Skip<T>(from).Take<T>(to - from + 1);
            }

            List<T> entityList = await entityQuery.ToListAsync();
            EntityList<T> result = new EntityList<T>(entityList, count, from, to);
            return result;
        }

        public virtual async Task<T> Get(Guid id)
        {
            T entity = await this._repository.GetByIdAsync<T>(id);
            return entity;
        }

        public virtual async Task<T> Update(T entity)
        {
            Guid entityId = (Guid)typeof(T).GetProperty("Id").GetValue(entity);
            if (Guid.Empty == entityId)
            {
                return null;
            }

            this._repository.Add(entity);

            try
            {
                await this._repository.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await this.EntityExists(entityId))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            T result = await this._repository.GetByIdAsync<T>(entityId);
            return result;
        }

        public virtual async Task<T> Create(T entity)
        {
            this._repository.Add(entity);
            await this._repository.SaveChangesAsync();
            Guid id = (Guid)typeof(T).GetProperty("Id").GetValue(entity);
            T result = await this._repository.GetByIdAsync<T>(id);
            return result;
        }

        public virtual async Task<T> Delete(Guid id)
        {
            T entity = await this._repository.GetByIdAsync<T>(id);
            if (entity == null)
            {
                return null;
            }

            this._repository.Remove(entity);
            await this._repository.SaveChangesAsync();
            return entity;
        }

        private async Task<bool> EntityExists(Guid id)
        {
            return await this._repository.ExistsAsync<T>(entity => (Guid)typeof(T).GetProperty("Id").GetValue(entity) == id);
        }
    }
}
