using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class TitularCreateRequestDTO
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public string Email { get; set; }
    public string CPF { get; set; }
    public Endereco? Endereco { get; set; }
}
