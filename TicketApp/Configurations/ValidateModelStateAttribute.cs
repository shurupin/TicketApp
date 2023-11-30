namespace TicketApp.Configurations
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;
    using Microsoft.AspNetCore.Mvc.ModelBinding;

    public class ValidateModelStateAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                Dictionary<string, List<string>> errors = new Dictionary<string, List<string>>();
                foreach (KeyValuePair<string, ModelStateEntry> entry in context.ModelState)
                {
                    List<string> fieldErrors = entry.Value.Errors.Select(error => error.ErrorMessage).ToList();
                    if (fieldErrors.Any())
                    {
                        errors[entry.Key] = fieldErrors;
                    }
                }
                context.Result = new BadRequestObjectResult(errors);
            }
        }
    }
}