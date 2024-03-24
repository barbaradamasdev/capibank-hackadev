using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class AtendimentoCreateRequestDTO
{
    public int Id { get; set; }
    public int TitularId { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataChamado { get; set; } = DateTime.Now;
    public string Resposta { get; set; } = string.Empty;
    public DateTime DataResposta { get; set; } 
    public bool EmAberto { get; set; } = true;
}
