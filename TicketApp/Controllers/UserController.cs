namespace TicketApp.Controllers
{
    using System.ComponentModel.DataAnnotations;

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

        public record UserByEmailRequestModel([Required, EmailAddress] string Email);
        public record UserByEmailResponseModel(Guid Id, string? UserName, string? Email);
        [HttpPost("GetUserByEmail")]
        public async Task<ActionResult<UserByEmailResponseModel>> GetUserByEmailAsync([FromBody] UserByEmailRequestModel requestModel)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            User? user = await this._userService.GetUserByEmailAsync(requestModel.Email);
            if (user == null)
            {
                return this.NotFound();
            }

            UserByEmailResponseModel responseModel = new UserByEmailResponseModel(user.Id, user.UserName, user.Email);
            return this.Ok(responseModel);
        }
    }
}