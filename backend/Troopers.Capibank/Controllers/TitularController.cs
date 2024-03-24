using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Services;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Controllers;

public class TitularController : DefaultController
{
    private readonly ITitularService _ts;
    private readonly CapibankContext _context;
    public TitularController(ITitularService ts, CapibankContext context)
    {
        _ts = ts;
        _context = context;
    }
    /// <summary>
    /// Método para listar todos os titulares das contas com os seus enderecos.
    /// </summary>
    /// <returns></returns>
    [HttpGet("listartodos")]
    public async Task<ActionResult<IEnumerable<TitularResponseDTO>>> ListarTodos()
    {
        var titular = await _ts.ListarTodos();
        if (titular is null) return NotFound("Titular nao encontado");
        return Ok(titular);
    }
    /// <summary>
    /// Método para listar um titular pelo ID juntamento com o respectivo endereco.
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("listarporid/{id}")]
    public async Task<ActionResult<TitularResponseDTO>> ListarPorId(int id)
    {
        var titular = await _ts.ListarTitularPorId(id);
        if (titular is null) return NotFound("titular não encontrado");
        return Ok(titular);
    }
    /// <summary>
    /// Método para listar um usuário pelo CPF retornando o CPF e a senha para login.
    /// </summary>
    /// <param name="cpf"></param>
    /// <returns></returns>
    [HttpGet("loginporcpf/{cpf}")]
    public async Task<ActionResult<TitularLoginCPFResponseDTO>> ListarPorCpf(string cpf)
    {
        var titular = await _ts.ListarPorCPF(cpf);
        if (titular is null) return NotFound("Titular não encontrado");
        return Ok(titular);
    }
    /// <summary>
    /// Método para listar um usuário pelo email retornando o email e a senha para login.
    /// </summary>
    /// <param name="email"></param>
    /// <returns></returns>
    [HttpGet("loginporemail/{email}")]
    public async Task<ActionResult<TitularLoginEmailResponseDTO>> ListarPorEmail(string email)
    {
        var titular = await _ts.ListarPorEmail(email);
        if (titular is null) return NotFound("Titular não encontrado");
        return Ok(titular);
    }
    /// <summary>
    /// Método para alteração dos dadps do Titular e também alterar o seu endereço se necessário.
    /// </summary>
    /// <param name="titularDTO"></param>
    /// <returns></returns>
    [HttpPut("alterarTitular")]
    public async Task<IActionResult> Alterar(TitularAlterarRequestDTO titularDTO)
    {
        if (titularDTO is null) return NotFound("Titular não encontrado");
        await _ts.AlTerarTitular(titularDTO);
        return Ok("Titular alterado com sucesso");
    }
    [HttpPost("login")]
    public  async Task<IActionResult> Login(TitularLoginRequestDTO loginDTO)
    {
        var cpfDto = loginDTO.CPF;
        var emailDto = loginDTO.Email;
        var senhaDto = loginDTO.Senha;
        var titular = await _context.Titulares.Where(t => t.CPF.Equals(cpfDto) || t.Email.Equals(emailDto)).FirstOrDefaultAsync();
        if (titular is null) return NotFound("Usuário não encontrado");
        if (titular.Senha.Equals(senhaDto)) ;
        return Ok("Login Realizado com sucesso");
    }

}
