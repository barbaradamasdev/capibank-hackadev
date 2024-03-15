using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.DTO.Auth;

namespace Troopers.Capibank.DTO.User;

public class UserDto
{
    public int Id {get; set;}
    public string Fullname  {get; set;}
    public string Email { get; set; }
    public string Password { get; set; }
    public DateTime Birthday { get; set; }
    public string Phone { get; set; }
    public AddressDto Address { get; set; }
    public UserRole Role { get; set; }

    public UserDto()
    {
        Id = 0;
        Fullname = string.Empty;
        Email = string.Empty;
        Password = string.Empty;
        Birthday = DateTime.Now;
        Phone = string.Empty;
        Address = new();
        Role = UserRole.CLIENT;
    }

    public UserDto(int id, string fullname, string email, string password, DateTime birthday, string phone, AddressDto address, UserRole role)
    {

        Id = id;
        Fullname = fullname;
        Email = email;
        Password =  password;
        Birthday = birthday;
        Phone = phone;
        Address = address;
        Role = role;

    }
}
   