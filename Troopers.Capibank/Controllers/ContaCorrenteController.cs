using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class ContaCorrenteController : ControllerBase
    {
        private readonly IContaCorrenteService _contaCorrenteService;

        public ContaCorrenteController(IContaCorrenteService contaCorrenteService)
        {
            _contaCorrenteService = contaCorrenteService;
        }

        [HttpPost("transacoes")]
        public IActionResult RealizarTransacoes([FromBody] ContaCorrenteTransacoesDto transacoesDto)
        {
            try
            {
                if (transacoesDto.ValorDeposito > 0)
                    _contaCorrenteService.Depositar(transacoesDto.NumeroConta, transacoesDto.ValorDeposito);

                if (transacoesDto.ValorSaque > 0)
                    _contaCorrenteService.Sacar(transacoesDto.NumeroConta, transacoesDto.ValorSaque);

                if (transacoesDto.ValorTransferencia > 0 && transacoesDto.NumeroContaDestinoTransferencia > 0)
                    _contaCorrenteService.Transferir(transacoesDto.NumeroConta, transacoesDto.NumeroContaDestinoTransferencia, transacoesDto.ValorTransferencia);

                if (transacoesDto.VerificarSaldo)
                {
                    var saldo = _contaCorrenteService.ConsultarSaldo(transacoesDto.NumeroConta);
                    // Retornar saldo
                }

                if (transacoesDto.VerificarExtrato)
                {
                    var extrato = _contaCorrenteService.ConsultarExtrato(transacoesDto.NumeroConta);
                    // Retornar extrato
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







