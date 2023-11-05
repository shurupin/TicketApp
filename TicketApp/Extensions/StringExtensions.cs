namespace TicketApp.Extensions
{
    public static class StringExtensions
    {
        public static bool IsNotNullAndNotWhiteSpace(this string str)
        {
            return !string.IsNullOrWhiteSpace(str);
        }

        public static string FirstLetterToUpper(this string str)
        {
            if (string.IsNullOrEmpty(str))
                return str;

            return char.ToUpper(str.First()) + str.Substring(1);
        }
    }
}
