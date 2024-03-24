using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class AtendimentoAlteracaoRequestDTO
{
    public int Id { get; set; }
    public int TitularId { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataChamado { get; set; } 
    public string Resposta { get; set; }
    public DateTime DataResposta { get; set; } 
    public bool EmAberto { get; set; } 
}
