using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.DTOs.Request;

public class TransacaoDepositoDTO
{ 
    public decimal Valor { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
}
