using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.Services;

public interface IAtendimentoService
{
    Task<IEnumerable<AtendimentoResponseDTO>> ListarTodos();
    Task<AtendimentoResponseDTO> ListarPorId(int id);
    Task CriarAtendimento(AtendimentoCreateRequestDTO atendimento);
    Task ResponderAtendimento(AtendimentoAlteracaoRequestDTO atendimento);
    Task Excluir(int id);
}
