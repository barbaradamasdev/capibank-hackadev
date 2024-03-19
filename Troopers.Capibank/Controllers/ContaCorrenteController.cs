using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

public class ContaCorrenteController : DefaultController
{
    private readonly IContaCorrenteService _cs;
    public ContaCorrenteController(IContaCorrenteService cs)
    {
        _cs = cs;
    }
    [HttpGet("listarcontas")]
    public async Task<ActionResult<IEnumerable<ContaCorrenteResponseDTO>>> ListarTodas()
    {
        var conta = await _cs.ListarTodas();
        if (conta is null)
            return NotFound("Conta não encontrada");
        return Ok(conta);
    }
    [HttpGet("listacontaporid/{id}")]
    public async Task<ActionResult> ListarPorId(int id)
    {
        var conta = await _cs.ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        return Ok(conta);
    }
    [HttpPost("criarconta")]
    public async Task<ActionResult<ContaCorrenteCreateRequestDTO>> CriarConta(ContaCorrenteCreateRequestDTO contaDTO)
    {
        if (contaDTO is null)
            return BadRequest();
        await _cs.CriarConta(contaDTO);
        return Ok("Conta cadastrada com sucesso");
    }
    [HttpPut("bloquearconta/{id}")]
    public async Task<IActionResult> BloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        await _cs.BloquearConta(id);
        return Ok("Conta bloqueada com sucesso");
    }
    [HttpPut("desbloquearconta/{id}")]
    public async Task<IActionResult> DesbloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        await _cs.DesbloquearConta(id);
        return Ok("Conta desbloqueada com sucesso");
    }
    [HttpDelete("excluirconta/{id}")]
    public async Task<IActionResult> ExcluirConta(int id)
    {
        var conta = await _cs.ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        _cs.DeletarConta(id);
        return Ok("Conta excluida com sucesso");

    }
}
