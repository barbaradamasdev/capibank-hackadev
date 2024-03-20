using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.Repositories;

public interface ITitularRepository
{
    Task<IEnumerable<Titular>> ListarTodos();
    Task<Titular> ListarPorId(int id);
    Task<Titular> Alterar(Titular titular);


}
