using Troopers.Capibank.Interfaces;
using System.Collections.Generic;
using Troopers.Capibank.Domain.Entities;

namespace Troopers.Capibank.Models;

public abstract class ContaBancaria
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public Titular? Titular { get; set; }
    public decimal Saldo { get; private set; }
    public bool EstaAtiva { get; set; }
    public DateTime CriadaEm { get; set; } = DateTime.Now;
    public DateTime AlteradaEm { get; set; } = DateTime.Now;
    public DateTime BloqueadaEm { get; set; }

    public IEnumerable<Transacao> Transacoes = [];
    
    
}
