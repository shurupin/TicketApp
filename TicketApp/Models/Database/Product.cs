namespace TicketApp.Models.Database
{
    using TicketApp.Models.Interfaces;

    public class Product : IGuid
    {
        public Guid Id { get; set; }
        public List<string> Attributes { get; set; }
        public string Category { get; set; }
        public DateTime CreatedAt { get; set; }
        public string Currency { get; set; }
        public string Image { get; set; }
        public bool InStock { get; set; }
        public bool IsAvailable { get; set; }
        public bool IsShippable { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public string Sku { get; set; }
        public string Status { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int Variants { get; set; }
    }
}
