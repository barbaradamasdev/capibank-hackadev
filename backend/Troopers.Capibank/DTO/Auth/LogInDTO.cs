namespace Troopers.Capibank.DTO.Auth;

public class LogInDTO
{
    public string Email {get ; set;}

    public string Password {get; set;}

    public LogInDTO()
    {
        Email = string.Empty;
        Password = string.Empty;
    }
}