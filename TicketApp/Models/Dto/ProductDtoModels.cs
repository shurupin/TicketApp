namespace TicketApp.Models.Dto
{
    public record ProductResponseModel(Guid Id, string Name, decimal Price, DateTime UpdatedAt);
    public record ProductListResponseModel(Guid Id, string Name, string Category, decimal Price, DateTime CreatedAt, DateTime UpdatedAt);
}
