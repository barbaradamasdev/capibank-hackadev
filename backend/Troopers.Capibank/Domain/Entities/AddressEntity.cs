using System.ComponentModel.DataAnnotations;

namespace Troopers.Capibank.Domain.Entities;

public class AddressEntity
{
    [Key]
    public int Id { get; set; }

    [Required]
    public string CEP { get; set; }

    [Required]
    [StringLength(32)]
    public string City { get; set; }

    [Required]
    public string Street { get; set; }

    [Required]
    public uint Number { get; set; }

    [Required]
    [StringLength(256)]
    public string Complement { get; set; }

    public AddressEntity()
    {
        Id = 0;
        CEP = string.Empty;
        City = string.Empty;
        Street = string.Empty;
        Number = 0;
        Complement = string.Empty;
    }

    public AddressEntity(
        int id,
        string cep,
        string city,
        string street,
        uint number,
        string complement
    ) {
        Id = id;
        CEP = cep;
        City = city;
        Street = street;
        Number = number;
        Complement = complement;
    }
}
