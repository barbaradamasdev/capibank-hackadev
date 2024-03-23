using AutoMapper;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Repositories;

namespace Troopers.Capibank.Services;

public class AtendimentoService : IAtendimentoService
{
    private readonly IAtendimentoRepository _repo;
    private readonly IMapper _mapper;

    public AtendimentoService(IAtendimentoRepository repo, IMapper mapper)
    {
        _repo = repo;
        _mapper = mapper;
    }
    public async Task<IEnumerable<AtendimentoResponseDTO>> ListarTodos()
    {
        var atendimento = await _repo.ListarTodos();
        return _mapper.Map<IEnumerable<AtendimentoResponseDTO>>(atendimento);
    }
    public async Task<AtendimentoResponseDTO> ListarPorId(int id)
    {
        var atendimento = await _repo.ListarPorId(id);
        return _mapper.Map<AtendimentoResponseDTO>(atendimento);
    }
    public async Task<IEnumerable<AtendimentoResponseDTO>> ListarAbertos(bool situacao)
    {
        var atendimento = await _repo.ListarAbertos(situacao);
        return _mapper.Map<IEnumerable<AtendimentoResponseDTO>>(atendimento);
    }
    public async Task CriarAtendimento(AtendimentoCreateRequestDTO atendimento)
    {
        var atendimentoEntity = _mapper.Map<Atendimento>(atendimento);
        await _repo.CriarAtendimento(atendimentoEntity);
        atendimento.Id = atendimentoEntity.Id;
    }
    public async Task ResponderAtendimento(AtendimentoAlteracaoRequestDTO atendimento)
    {
        var atendimentoEntity = _mapper.Map<Atendimento>(atendimento);
        await _repo.ResponderAtendimento(atendimentoEntity);
    }
    public async Task Excluir(int id)
    {
        var atendimento = await _repo.ListarPorId(id);
        await _repo.Excluir(atendimento.Id);
    }
}
