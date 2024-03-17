using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class ContaPoupancaController : ControllerBase
    {
        private readonly IContaPoupancaService _contaPoupancaService;

        public ContaPoupancaController(IContaPoupancaService contaPoupancaService)
        {
            _contaPoupancaService = contaPoupancaService;
        }

        [HttpPost("transacoes")]
        public IActionResult RealizarTransacoes([FromBody] ContaPoupancaTransacoesDto transacoesDto)
        {
            try
            {
                if (transacoesDto.ValorDeposito > 0)
                    _contaPoupancaService.Depositar(transacoesDto.NumeroConta, transacoesDto.ValorDeposito);

                if (transacoesDto.ValorSaque > 0)
                {
                    if (!_contaPoupancaService.Sacar(transacoesDto.NumeroConta, transacoesDto.ValorSaque))
                    {
                        return BadRequest("Saldo insuficiente para realizar o saque.");
                    }
                }

                if (transacoesDto.VerificarSaldo)
                {
                    var saldo = _contaPoupancaService.ConsultarSaldo(transacoesDto.NumeroConta);
                    return Ok(new { Saldo = saldo });
                }

                if (transacoesDto.VerificarExtrato)
                {
                    var extrato = _contaPoupancaService.ConsultarExtrato(transacoesDto.NumeroConta);
                    return Ok(new { Extrato = extrato });
                }

                return Ok("Transações realizadas com sucesso.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao processar as transações.");
            }
        }
    }

