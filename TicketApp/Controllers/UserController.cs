namespace TicketApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    using Models.Database;

    using TicketApp.Services;

    [ApiController]
    [Route(template: "[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(IUserService userService, ILogger<UserController> logger)
        {
            this._userService = userService;
            this._logger = logger;
        }

        [HttpGet(Name = "GetUserByEmail")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<User>> GetUserByEmailAsync(string email)
        {
            User? user = await this._userService.GetUserByEmailAsync(email);
            if (user == null)
            {
                return this.NotFound();
            }
            return this.Ok(user);
        }
    }
}