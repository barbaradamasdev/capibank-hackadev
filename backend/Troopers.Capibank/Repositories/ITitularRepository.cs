using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.Repositories;

public interface ITitularRepository
{
    Task<IEnumerable<Titular>> ListarTodos();
    Task<Titular> ListarPorId(int id);
    Task<Titular> ListaPorCpf(string cpf);
    Task<Titular> ListaPorEmail(string email);
    Task<Titular> Alterar(Titular titular);


}
