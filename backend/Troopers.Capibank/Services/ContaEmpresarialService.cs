using System;
using System.Collections.Generic;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Services;

    public class ContaEmpresarialService : IContaEmpresarialService
    {
        private readonly List<ContaEmpresarial> _contasEmpresariais;

        public ContaEmpresarialService()
        {
            // Inicializa a lista de contas empresariais (simulando um banco de dados)
            _contasEmpresariais = new List<ContaEmpresarial>();
        }

        public void Depositar(int numeroConta, decimal valor)
        {
            var contaEmpresarial = ObterContaEmpresarialPorNumero(numeroConta);

            if (contaEmpresarial == null)
            {
                throw new ArgumentException("Conta empresarial não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do depósito deve ser maior que zero.");
            }

            contaEmpresarial.Saldo += valor;

            // Simular a transação no banco de dados
            SimularTransacao(TipoTransacao.Deposito, valor, numeroConta);
        }

        public bool Sacar(int numeroConta, decimal valor)
        {
            var contaEmpresarial = ObterContaEmpresarialPorNumero(numeroConta);

            if (contaEmpresarial == null)
            {
                throw new ArgumentException("Conta empresarial não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do saque deve ser maior que zero.");
            }

            if (contaEmpresarial.Saldo < valor)
            {
                return false; // Saldo insuficiente
            }

            contaEmpresarial.Saldo -= valor;

            // Simular a transação no banco de dados
            SimularTransacao(TipoTransacao.Saque, valor, numeroConta);

            return true;
        }

        public bool Transferir(int numeroContaOrigem, int numeroContaDestino, decimal valor)
        {
            var contaOrigem = ObterContaEmpresarialPorNumero(numeroContaOrigem);
            var contaDestino = ObterContaEmpresarialPorNumero(numeroContaDestino);

            if (contaOrigem == null || contaDestino == null)
            {
                throw new ArgumentException("Conta empresarial de origem ou destino não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor da transferência deve ser maior que zero.");
            }

            if (contaOrigem.Saldo < valor)
            {
                return false; // Saldo insuficiente na conta de origem
            }

            contaOrigem.Saldo -= valor;
            contaDestino.Saldo += valor;

            // Simular as transações no banco de dados
            SimularTransacao(TipoTransacao.Transferencia, valor, numeroContaOrigem, numeroContaDestino);

            return true;
        }

        public decimal ConsultarSaldo(int numeroConta)
        {
            var contaEmpresarial = ObterContaEmpresarialPorNumero(numeroConta);

            if (contaEmpresarial == null)
            {
                throw new ArgumentException("Conta empresarial não encontrada.");
            }

            return contaEmpresarial.Saldo;
        }

        public IEnumerable<string> ConsultarExtrato(int numeroConta)
        {
            var extrato = new List<string>();
            //lógica para consultar o extrato da conta empresarial
            return extrato;
        }

        private ContaEmpresarial ObterContaEmpresarialPorNumero(int numeroConta)
        {
            return _contasEmpresariais.Find(conta => conta.NumeroConta == numeroConta);
        }

        private void SimularTransacao(TipoTransacao tipo, decimal valor, params int[] numerosContas)
        {
            //transações no banco de dados
        }
    }







