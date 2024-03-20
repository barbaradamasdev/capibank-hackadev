using AutoMapper;
using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.DTOs.Response;

public class ContaCorrenteResponseDTO 
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public Titular? Titular { get; set; }
    public bool EstaAtiva { get; set; } = true;
    public DateTime CriadaEm { get; set; } = DateTime.Now;
    public DateTime AlteradaEm { get; set; } = DateTime.Now;
    public DateTime BloqueadaEm { get; set; }
}
