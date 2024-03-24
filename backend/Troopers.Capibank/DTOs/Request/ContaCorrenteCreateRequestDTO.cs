using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Request;

public class ContaCorrenteCreateRequestDTO
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public TitularCreateRequestDTO? Titular { get; set; }
   
}
