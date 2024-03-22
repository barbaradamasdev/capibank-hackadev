using Troopers.Capibank.Models;

namespace Troopers.Capibank.Repositories;

public interface IContaCorrenteRepository
{
    Task<IEnumerable<ContaCorrente>> ListarTodos();
    Task<ContaCorrente> ListarPorId(int id);
    Task<ContaCorrente> ListarPorCPF(string cpf);
    Task<ContaCorrente> CriarConta(ContaCorrente contaCorrente);
    Task<ContaCorrente> BloquearConta(int id);
    Task<ContaCorrente> DesbloquearConta(int id);
    Task<ContaCorrente> ExcluirConta(int id);
}
