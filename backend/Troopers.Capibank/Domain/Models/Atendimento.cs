namespace Troopers.Capibank.Domain.Models;

public class Atendimento
{
    public int Id { get; set; }
    public string? Descricao { get; set; }
    public DateTime DataChamado { get; set; } = DateTime.Now;
    public string Resposta { get; set; } = string.Empty;
    public DateTime DataResposta { get; set; } 
    public int? TitularId { get; set; }
    public Titular? Titular { get; set; }
    public bool EmAberto { get; set; } = true;
}