using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Repositories;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Controllers;

public class TransacaoController : DefaultController
{
    private readonly CapibankContext _context;
    private readonly IMapper _mapper;

    public TransacaoController(CapibankContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    [HttpGet("listartransacoes/{id}")]
    public async Task<IEnumerable<Transacao>> ListarPorTitular(int id)
    {
        return  await _context.Transacoes.Where(c => c.ContaId == id).AsNoTracking().ToListAsync();
        
    }

    [HttpPost("depositar/{id}")]
    public async Task<IActionResult> Depositar(TransacaoDepositoDTO depositoDTO, int id)
    {
        var conta = await _context.ContasCorrente.Where(c => c.Id == id).FirstOrDefaultAsync();
        decimal valor = depositoDTO.Valor;
        if (conta == null)
            return NotFound("Conta não encontrada");
        if (valor <= 0)
            return BadRequest("Valor inválido");
        conta.Depositar(valor);
        conta.AlteradaEm = DateTime.Now;
        Transacao deposito = new()
        {
            ContaId = conta.Id,
            Valor = valor,
            TipoTransacao = Operacao.DEPOSITO,
            DataTransacao = DateTime.Now,
            Situacao = SituacaoTransacao.SUCEDIDA
        };
        await _context.Transacoes.AddAsync(deposito);
        await _context.SaveChangesAsync();
        return Created();
    }
}
