namespace TicketApp.Extensions
{
    public static class StringExtensions
    {
        public static bool IsNotNullAndNotWhiteSpace(this string str)
        {
            return !string.IsNullOrWhiteSpace(str);
        }
    }
}
