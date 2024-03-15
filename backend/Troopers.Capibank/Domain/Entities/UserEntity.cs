using System.ComponentModel.DataAnnotations;
using Troopers.Capibank.Domain.Enums;

namespace Troopers.Capibank.Domain.Entities;

public class UserEntity {
    [Key]
    public uint Id { get; set; }

    [Required]
    [StringLength(128)]
    public string Fullname { get; set; }

    [Required]
    [StringLength(64)]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [StringLength(256)]
    public string Password { get; set; }
    
    [Required]
    public DateTime Birthday { get; set; }

    [Required]
    [StringLength(16)]
    public string Phone { get; set; }

    [Required]
    public AddressEntity Address { get; set; }

    [Required]
    public UserRole Role { get; set; }

    public UserEntity()
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
}
