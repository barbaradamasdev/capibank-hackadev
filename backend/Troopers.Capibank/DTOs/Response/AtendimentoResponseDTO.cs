using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Response;

public class AtendimentoResponseDTO
{
    public int Id { get; set; }
    public TitularAtendimentoResponseDTO? Titular { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataChamado { get; set; } 
    public string Resposta { get; set; } 
    public DateTime DataResposta { get; set; }
    public bool EmAberto { get; set; }
}
