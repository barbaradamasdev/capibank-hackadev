using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.Models;

public abstract class ContaBancaria
{
    public int Id { get; set; }
    public int NumeroConta { get; set; }
    public Titular? Titular { get; set; }
    public decimal Saldo { get; protected set; }
    public bool EstaAtiva { get; protected set; } = true;
    public DateTime CriadaEm { get; set; } = DateTime.UtcNow;
    public DateTime AlteradaEm { get; set; } = DateTime.UtcNow;
    public DateTime BloqueadaEm { get; set; }

    public IEnumerable<Transacao> ListaTransacoes = [];


    public abstract bool BloquearConta(int id);
    public abstract bool DesbloquearConta(int id);
    public abstract bool ExcluirConta(int id);
    public abstract decimal Depositar(decimal valor);
    public abstract decimal Sacar(decimal valor);
    
}
