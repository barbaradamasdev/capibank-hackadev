using AutoMapper;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Repositories;

namespace Troopers.Capibank.Services;

public class TitularService : ITitularService
{
    private readonly ITitularRepository _repo;
    private readonly IMapper _mapper;

    public TitularService(ITitularRepository repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }
    public async Task<IEnumerable<TitularResponseDTO>> ListarTodos()
    {
        var titular = await _repo.ListarTodos();
        return _mapper.Map<IEnumerable<TitularResponseDTO>>(titular);
    }
    public async Task<TitularResponseDTO> ListarTitularPorId(int id)
    {
        var titular = await _repo.ListarPorId(id);
        return _mapper.Map<TitularResponseDTO>(titular);
    }
    public async Task<TitularLoginCPFResponseDTO> ListarPorCPF(string cpf)
    {
        var titular = await _repo.ListaPorCpf(cpf);
        return _mapper.Map<TitularLoginCPFResponseDTO>(titular);
    }
    public async Task<TitularLoginEmailResponseDTO> ListarPorEmail(string email)
    {
        var titular = await _repo.ListaPorEmail(email);
        return _mapper.Map<TitularLoginEmailResponseDTO>(titular);
    }
    public async Task AlTerarTitular(TitularAlterarRequestDTO titular)
    {
        var titularEntity = _mapper.Map<Titular>(titular);
        await _repo.Alterar(titularEntity);
    }
   
}
