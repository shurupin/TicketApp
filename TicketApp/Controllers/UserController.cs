namespace TicketApp.Controllers
{
    using Mapster;
    using Microsoft.AspNetCore.Mvc;
    using Models.Database;
    using System.ComponentModel.DataAnnotations;
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

        #region GetUserByEmailAsync
        public record UserByEmailRequestModel([Required, EmailAddress] string Email);
        public record UserByEmailResponseModel(Guid Id, string? UserName, string? Email, bool EmailConfirmed);
        [HttpPost(template: "GetUserByEmail")]
        public async Task<ActionResult<UserByEmailResponseModel>> GetUserByEmailAsync([FromBody] UserByEmailRequestModel requestModel)
        {
            User? user = await this._userService.GetUserByEmailAsync(email: requestModel.Email);
            if (user == null)
            {
                return this.NotFound();
            }

            UserByEmailResponseModel responseModel = user.Adapt<UserByEmailResponseModel>();
            return this.Ok(value: responseModel);
        }
        #endregion
    }
}