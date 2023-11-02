namespace TicketApp.Services
{
    using TanvirArjel.EFCore.GenericRepository;
    using TicketApp.Models.Database;

    public interface IUserService : ITransientService
    {
        Task<User?> GetUserByEmailAsync(string email);
    }

    public class UserService : IUserService
    {
        private readonly IRepository _repository;

        public UserService(IRepository repository)
        {
            this._repository = repository ?? throw new ArgumentNullException(paramName: nameof(repository));
        }

        public async Task<User?> GetUserByEmailAsync(string email)
        {
            if (string.IsNullOrEmpty(email))
                throw new ArgumentException("Email cannot be null or empty", nameof(email));

            User? user = await this._repository.GetAsync<User>(x => x.Email.ToLower() == email.ToLower());
            return user;
        }
    }
}