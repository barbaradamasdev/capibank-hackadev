using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Response;

public class TitularResponseDTO
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public string Email { get; set; }
    public string CPF { get; set; }
    public DateTime? CriadoEm { get; set; } = DateTime.Now;
    public DateTime? AlteradoEm { get; set; } = DateTime.Now;
    public Endereco? Endereco { get; set; }
}
