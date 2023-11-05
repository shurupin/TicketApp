namespace TicketApp.Extensions
{
    public static class StringExtensions
    {
        public static bool IsNotNullAndNotWhiteSpace(this string str)
        {
            return !string.IsNullOrWhiteSpace(value: str);
        }

        public static string FirstLetterToUpper(this string str)
        {
            if (string.IsNullOrEmpty(value: str))
                return str;

            return char.ToUpper(c: str.First()) + str.Substring(startIndex: 1);
        }
    }
}
