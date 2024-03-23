using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

public class AtendimentoController : DefaultController
{
    private readonly IAtendimentoService _atendimento;
    public AtendimentoController(IAtendimentoService atendimento)
    {
        _atendimento = atendimento;
    }
    [HttpGet("listartodos")]
    public async Task<ActionResult<IEnumerable<AtendimentoResponseDTO>>> ListarTodos()
    {
        var atendimento = await _atendimento.ListarTodos();
        if (atendimento is null) return NotFound("Atendimento não encontrado");
        return Ok(atendimento);
    }
    [HttpGet("listarporid/{id}", Name ="listaporid")]
    public async Task<ActionResult<AtendimentoResponseDTO>> ListarPorId(int id)
    {
        var atendimento = await _atendimento.ListarPorId(id);
        if (atendimento is null) return NotFound("Atendimento não encontrado");
        return Ok(atendimento);
    }
    [HttpPost("criaratendimento")]
    public async Task<IActionResult> CriarAtendimento(AtendimentoCreateRequestDTO atendimentoDTO)
    {
        if (atendimentoDTO is null) return BadRequest();
        await _atendimento.CriarAtendimento(atendimentoDTO);
        return new CreatedAtRouteResult("listarporid", new { id = atendimentoDTO.Id }, atendimentoDTO);
    }
    [HttpPut("alteraratendimento")]
    public async Task<IActionResult> ResponderAtendimento(AtendimentoAlteracaoRequestDTO atendimentoDTO)
    {
        if (atendimentoDTO is null) return BadRequest();
        await _atendimento.ResponderAtendimento(atendimentoDTO);
        return Ok(atendimentoDTO);
    }
    [HttpDelete("excluiratendimento/{id}")]
    public async Task<IActionResult> Excluir(int id)
    {
        var atendimento = await _atendimento.ListarPorId(id);
        if (atendimento is null) return NotFound("Atendimento não encontrado");
        await _atendimento.Excluir(atendimento.Id);
        return Ok(atendimento);
    }
}
