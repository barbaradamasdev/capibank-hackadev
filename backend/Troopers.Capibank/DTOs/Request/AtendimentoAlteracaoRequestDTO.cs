using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.DTOs.Request;

public class AtendimentoAlteracaoRequestDTO
{
    public int Id { get; set; }
    public TitularAtendimentoResponseDTO? Titular { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataChamado { get; set; } = DateTime.Now;
    public string Resposta { get; set; } = string.Empty;
    public DateTime DataResposta { get; set; }
}
