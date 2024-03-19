using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.Models;

public abstract class ContaBancaria
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public Titular? Titular { get; set; }
    public decimal Saldo { get; private set; }
    public bool EstaAtiva { get; set; } = true;
    public DateTime CriadaEm { get; set; } = DateTime.Now;
    public DateTime AlteradaEm { get; set; } = DateTime.Now;
    public DateTime BloqueadaEm { get; set; }

    public IEnumerable<Transacao> ListaTransacoes = [];
    

    public bool BloquearConta()
    {
        return EstaAtiva = false;
    }
    public bool DesbloquearConta()
    {
        return EstaAtiva = true;
    }
    
}
