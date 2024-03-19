using AutoMapper;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Models;
using Troopers.Capibank.Repositories;

namespace Troopers.Capibank.Services;

public class ContaCorrenteService : IContaCorrenteService
{
    private readonly IContaCorrenteRepository _repo;
    private readonly IMapper _mapper;

    public ContaCorrenteService(IContaCorrenteRepository repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }

    public async Task<IEnumerable<ContaCorrenteResponseDTO>> ListarTodas()
    {
        var contaEntity = await _repo.ListarTodos();
        return _mapper.Map<IEnumerable<ContaCorrenteResponseDTO>>(contaEntity);

    }
    public async Task<ContaCorrenteResponseDTO> ListarPorId(int id)
    {
        var contaEntity = await _repo.ListarPorId(id);
        return _mapper.Map<ContaCorrenteResponseDTO>(contaEntity);
    }
    public async Task CriarConta(ContaCorrenteCreateRequestDTO contaDTO)
    {
        var contaEntity = _mapper.Map<ContaCorrente>(contaDTO);
        await _repo.CriarConta(contaEntity);
        contaDTO.Id = contaEntity.Id;
    }
    public async Task BloquearConta(int id)
    {
        var conta = _repo.ListarPorId(id).Result;
        await _repo.BloquearConta(conta.Id);
    }
    public async Task DesbloquearConta(int id)
    {
        var conta = _repo.ListarPorId(id).Result;
        await _repo.DesbloquearConta(conta.Id);
        
    }
    public async Task DeletarConta(int id)
    {
        var conta = _repo.ListarPorId(id).Result;
        await _repo.ExcluirConta(conta.Id);
        
    }
}
