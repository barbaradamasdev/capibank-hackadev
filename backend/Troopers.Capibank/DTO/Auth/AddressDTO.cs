namespace Troopers.Capibank.DTO.Auth;

public class AddressDto
{
    public uint Id { get; set; }
    public string CEP {get; set;}
    public string City {get; set;}
    public string Street {get; set;}
    public uint Number {get; set;}
    public string Complement {get; set;}

    public AddressDto()
    {
        Id = 0;
        CEP = string.Empty;
        City = string.Empty;
        Street = string.Empty;
        Number = 0;
        Complement = string.Empty;
    }

    public AddressDto(uint id, string cep, string city, string street, uint number, string complement)
    {
        Id = id;
        CEP = cep;
        City = city;
        Street = street;
        Number = number;
        Complement = complement;
    }
}