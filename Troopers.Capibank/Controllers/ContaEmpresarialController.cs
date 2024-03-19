using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.DTOs;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

    [ApiController]
    [Route("api/[controller]")]
    public class ContaEmpresarialController : ControllerBase
    {
        private readonly IContaEmpresarialService _contaEmpresarialService;

        public ContaEmpresarialController(IContaEmpresarialService contaEmpresarialService)
        {
            _contaEmpresarialService = contaEmpresarialService;
        }

        [HttpPost("deposito")]
        public IActionResult Depositar([FromBody] ContaEmpresarialTransacoesDto transacoesDto)
        {
            try
            {
                _contaEmpresarialService.Depositar(transacoesDto.NumeroConta, transacoesDto.ValorDeposito);
                return Ok("Depósito realizado com sucesso.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao processar o depósito.");
            }
        }

        [HttpPost("saque")]
        public IActionResult Sacar([FromBody] ContaEmpresarialTransacoesDto transacoesDto)
        {
            try
            {
                var sucesso = _contaEmpresarialService.Sacar(transacoesDto.NumeroConta, transacoesDto.ValorSaque);
                if (sucesso)
                    return Ok("Saque realizado com sucesso.");
                else
                    return BadRequest("Saldo insuficiente.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao processar o saque.");
            }
        }

        [HttpPost("transferencia")]
        public IActionResult Transferir([FromBody] ContaEmpresarialTransacoesDto transacoesDto)
        {
            try
            {
                var sucesso = _contaEmpresarialService.Transferir(transacoesDto.NumeroConta, transacoesDto.NumeroContaDestinoTransferencia, transacoesDto.ValorTransferencia);
                if (sucesso)
                    return Ok("Transferência realizada com sucesso.");
                else
                    return BadRequest("Saldo insuficiente.");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao processar a transferência.");
            }
        }

        [HttpGet("saldo/{numeroConta}")]
        public IActionResult ConsultarSaldo(int numeroConta)
        {
            try
            {
                var saldo = _contaEmpresarialService.ConsultarSaldo(numeroConta);
                return Ok($"Saldo da conta {numeroConta}: {saldo}");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao consultar o saldo.");
            }
        }

        [HttpGet("extrato/{numeroConta}")]
        public IActionResult ConsultarExtrato(int numeroConta)
        {
            try
            {
                var extrato = _contaEmpresarialService.ConsultarExtrato(numeroConta);
                return Ok(extrato);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500, "Ocorreu um erro ao consultar o extrato.");
            }
        }
    }

