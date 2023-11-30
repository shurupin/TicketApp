namespace TicketApp.Models.Dto
{
    using Database;

    using SmartAnalyzers.CSharpExtensions.Annotations;

    [TwinType(typeof(Product), IgnoredMembers = new[] { nameof(Product.CreatedAt), nameof(Product.UpdatedAt) })]
    public record ProductRequestResponseModel(Guid Id, List<string>? Attributes, string Category, string Currency,
        string Image, bool InStock, bool IsAvailable, bool IsShippable, string Name, decimal Price, int Quantity,
        string Sku, string Status, int Variants);

    [TwinType(typeof(Product), IgnoredMembers = new[] { nameof(Product.Attributes), nameof(Product.CreatedAt), nameof(Product.InStock), nameof(Product.IsAvailable), nameof(Product.IsShippable), nameof(Product.Quantity), nameof(Product.Sku), nameof(Product.Variants) })]
    public record ProductListResponseModel(Guid Id, string Name, string Category, string Image, string Status,
        string Currency, decimal Price, DateTime UpdatedAt);
}
