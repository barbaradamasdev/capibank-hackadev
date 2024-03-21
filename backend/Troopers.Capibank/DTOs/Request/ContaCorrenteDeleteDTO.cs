using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class ContaCorrenteDeleteDTO
{
    public int Id { get; set; }
    
    public decimal Saldo { get; set; }
}
