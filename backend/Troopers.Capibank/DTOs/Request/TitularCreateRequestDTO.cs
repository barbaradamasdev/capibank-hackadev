using System.ComponentModel.DataAnnotations;
using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class TitularCreateRequestDTO
{
    public int Id { get; set; }
    [Required(ErrorMessage ="Campo nome é obrigatório")]
    public string? Nome { get; set; }
    [Required(ErrorMessage ="Campo email é obrigatório")]
    [DataType(DataType.EmailAddress)]
    public string Email { get; set; }
    [Required(ErrorMessage = "Campo CPF é obrigatória")]
    [StringLength(11)]
    public string CPF { get; set; }
    [Required(ErrorMessage ="Campo Senha é obrigatória")]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Senha { get; set; }
    public Endereco? Endereco { get; set; }
}
