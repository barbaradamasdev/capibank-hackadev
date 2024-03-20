using Troopers.Capibank.Domain.Enums;

namespace Troopers.Capibank.DTOs.Request;

public class TransacaoTransferenciaDTO
{ 
    public decimal Valor { get; set; }
    public  string CPF { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
   
}

