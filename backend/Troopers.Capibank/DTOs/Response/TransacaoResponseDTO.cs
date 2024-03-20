using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.DTOs.Response;

public class TransacaoResponseDTO
{
    public int Id { get; set; }
    public Operacao TipoTransacao { get; set; }
    public decimal Valor { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
    public SituacaoTransacao Situacao { get; set; }
    public int ContaDestinoOrigemId { get; set; }
    public int ContaId { get; set; }
   

}
