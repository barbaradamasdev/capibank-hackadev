using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Repositories;

public interface ITransacaoRepository
{
    Task<IEnumerable<Transacao>> ListarTodas();
    Task<ContaCorrente> ListarPorId(int id);
    Task Deposito(Transacao deposito,int id);
    Task<Transacao> Sacar(int id, decimal valor);
    Task<Transacao> Transferir(int id, ContaCorrente contaDestino, decimal valor);
}
