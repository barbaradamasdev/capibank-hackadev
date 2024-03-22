using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.Services;

public interface ITitularService
{
    Task<IEnumerable<TitularResponseDTO>> ListarTodos();
    Task<TitularResponseDTO> ListarTitularPorId(int id);
    Task<TitularLoginCPFResponseDTO> ListarPorCPF(string cpf);
    Task<TitularLoginEmailResponseDTO> ListarPorEmail(string email);

    Task AlTerarTitular(TitularAlterarRequestDTO titular);
}
