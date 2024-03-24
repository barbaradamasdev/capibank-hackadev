using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.Services;

public interface IContaCorrenteService
{
    Task<IEnumerable<ContaCorrenteResponseDTO>> ListarTodas();
    Task<ContaCorrenteResponseDTO> ListarPorId(int id);
    Task<ContaCorrenteSaldoResponseDTO> ListarPorCPF(string cpf);
    Task CriarConta(ContaCorrenteCreateRequestDTO contaDTO);
    Task BloquearConta(int id);
    Task DesbloquearConta(int id);
    Task DeletarConta(int id);
}
