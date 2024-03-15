namespace Troopers.Capibank.DTO.Auth;

public class SignUpDTO
{
    public string? Fullname {get; set;}
    public string? Email {get; set;}
    public string? Password {get; set;}

    // The Date format must be YYYY-MM-dd
    public DateTime? Birthday {get; set;}
    public string? Phone {get; set;}
    public AddressDto? Address {get; set;}
}