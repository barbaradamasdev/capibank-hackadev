using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Models;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

public class ContaCorrenteController : DefaultController
{
    private readonly IContaCorrenteService _cs;
    public ContaCorrenteController(IContaCorrenteService cs)
    {
        _cs = cs;
    }
    /// <summary>
    /// Método que lista todas as contas cadastradas.
    /// </summary>
    /// <returns></returns>
    [HttpGet("listarcontas")]
    public async Task<ActionResult<IEnumerable<ContaCorrenteResponseDTO>>> ListarTodas()
    {
        var conta = await _cs.ListarTodas();
        if (conta is null)
            return NotFound("Conta não encontrada");
        return Ok(conta);
    }
    /// <summary>
    /// Método que lista uma conta pelo ID indicado.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("listacontaporid/{id}", Name = "ListarPorId")]
    public async Task<ActionResult> ListarPorId(int id)
    {
        var conta = await _cs.ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        return Ok(conta);
    }
    /// <summary>
    /// Método que lista uma conta pelo CPF do titular retornando os dados da conta, do titular e o saldo.
    /// </summary>
    /// <param name="cpf"></param>
    /// <returns></returns>
    [HttpGet("listarporcpf/{cpf}")]
    public async Task<ActionResult> ListarPorCPF(String cpf)
    {
        var conta = await _cs.ListarPorCPF(cpf);
        if (conta is null) return NotFound("Conta não encontrada");
        return Ok(conta);
    }
    /// <summary>
    /// Método para criar conta, criando também o titular e o endereco.
    /// </summary>
    /// <param name="contaDTO"></param>
    /// <returns></returns>
    [HttpPost("criarconta")]
    public async Task<ActionResult<ContaCorrenteCreateRequestDTO>> CriarConta(ContaCorrenteCreateRequestDTO contaDTO)
    {
        if (contaDTO is null)
            return BadRequest();
        await _cs.CriarConta(contaDTO);
        return new CreatedAtRouteResult("ListarPorId", new { id = contaDTO.Id }, contaDTO);
    }
    /// <summary>
    /// Método para bloquear a conta cadastrada no sistema.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpPut("bloquearconta/{id}")]
    public async Task<IActionResult> BloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        await _cs.BloquearConta(id);
        return Ok("Conta bloqueada com sucesso");
    }
    /// <summary>
    /// Método usado para desbloquear uma conta que esteja bloqueada.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpPut("desbloquearconta/{id}")]
    public async Task<IActionResult> DesbloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        if (conta is null)
            return NotFound("Conta não encontrada");
        await _cs.DesbloquearConta(id);
        return Ok("Conta desbloqueada com sucesso");
    }
    /// <summary>
    /// Método usado para deletar uma conta do sistema.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
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
