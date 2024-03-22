using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Response;

public class ContaCorrenteSaldoResponseDTO
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public TitularSaldoResponseDTO? Titular { get; set; }
    public decimal Saldo { get; protected set; }
}
