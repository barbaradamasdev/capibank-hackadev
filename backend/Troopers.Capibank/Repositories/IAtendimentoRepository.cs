using Troopers.Capibank.Domain.Models;

namespace Troopers.Capibank.Repositories;

public interface IAtendimentoRepository
{
    Task<IEnumerable<Atendimento>> ListarTodos();
    Task<Atendimento> ListarPorId(int id);
    Task<IEnumerable<Atendimento>> ListarAbertos(bool situacao);
    Task<Atendimento> CriarAtendimento(Atendimento atendimento);
    Task<Atendimento> ResponderAtendimento(Atendimento atendimento);
    Task<Atendimento> Excluir(int id);
}
