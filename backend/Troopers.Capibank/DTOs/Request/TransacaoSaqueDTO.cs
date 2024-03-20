namespace Troopers.Capibank.DTOs.Request;

public class TransacaoSaqueDTO
{
    public decimal Valor { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
}
