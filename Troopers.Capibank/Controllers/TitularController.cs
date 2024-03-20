using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

public class TitularController : DefaultController
{
    private readonly ITitularService _ts;
    public TitularController(ITitularService ts)
    {
        _ts = ts;
    }
    [HttpGet("listartodos")]
    public async Task<ActionResult<IEnumerable<TitularResponseDTO>>> ListarTodos()
    {
        var titular = await _ts.ListarTodos();
        if (titular is null) return NotFound("Titular nao encontado");
        return Ok(titular);
    }
    [HttpGet("listarporid/{id}")]
    public async Task<ActionResult<TitularResponseDTO>> ListarPorId(int id)
    {
        var titular = await _ts.ListarTitularPorId(id);
        if (titular is null) return NotFound("titular não encontrado");
        return Ok(titular);
    }
    [HttpPut("alterarTitular")]
    public async Task<IActionResult> Alterar(TitularAlterarRequestDTO titularDTO)
    {
        if (titularDTO is null) return NotFound("Titular não encontrado");
        await _ts.AlTerarTitular(titularDTO);
        return Ok("Titular alterado com sucesso");
    }
}
