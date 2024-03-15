using System.Text.RegularExpressions;

namespace Troopers.Capibank.Util.Validators;

public class PasswordValidator : IValidator<string>
{
    private static readonly Regex matcher = new(
        @"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",
        RegexOptions.Compiled
    );

    public bool Validate(string data)
    {
        return matcher.IsMatch(data);
    }
}
