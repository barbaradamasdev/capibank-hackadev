using System;
using System.Collections.Generic;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Services

    public class ContaCorrenteService : IContaCorrenteService
    {
        private readonly List<ContaCorrente> _contasCorrentes;

        public ContaCorrenteService()
        {
            // Inicializa a lista de contas correntes (simulando um banco de dados)
            _contasCorrentes = new List<ContaCorrente>();
        }

        public void Depositar(int numeroConta, decimal valor)
        {
            var contaCorrente = ObterContaCorrentePorNumero(numeroConta);

            if (contaCorrente == null)
            {
                throw new ArgumentException("Conta corrente não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do depósito deve ser maior que zero.");
            }

            contaCorrente.Saldo += valor;

            // transação no banco de dados
            SimularTransacao(TipoTransacao.Deposito, valor, numeroConta);
        }

        public bool Sacar(int numeroConta, decimal valor)
        {
            var contaCorrente = ObterContaCorrentePorNumero(numeroConta);

            if (contaCorrente == null)
            {
                throw new ArgumentException("Conta corrente não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do saque deve ser maior que zero.");
            }

            if (contaCorrente.Saldo < valor)
            {
                return false; // Saldo insuficiente
            }

            contaCorrente.Saldo -= valor;

            // transação no banco de dados
            SimularTransacao(TipoTransacao.Saque, valor, numeroConta);

            return true;
        }

        public bool Transferir(int numeroContaOrigem, int numeroContaDestino, decimal valor)
        {
            var contaOrigem = ObterContaCorrentePorNumero(numeroContaOrigem);
            var contaDestino = ObterContaCorrentePorNumero(numeroContaDestino);

            if (contaOrigem == null || contaDestino == null)
            {
                throw new ArgumentException("Conta corrente de origem ou destino não encontrada.");
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

            // transações no banco de dados
            SimularTransacao(TipoTransacao.Transferencia, valor, numeroContaOrigem, numeroContaDestino);

            return true;
        }

        public decimal ConsultarSaldo(int numeroConta)
        {
            var contaCorrente = ObterContaCorrentePorNumero(numeroConta);

            if (contaCorrente == null)
            {
                throw new ArgumentException("Conta corrente não encontrada.");
            }

            return contaCorrente.Saldo;
        }

        public IEnumerable<string> ConsultarExtrato(int numeroConta)
        {
            var extrato = new List<string>();
            // lógica para consultar o extrato da conta corrente
            return extrato;
        }

        private ContaCorrente ObterContaCorrentePorNumero(int numeroConta)
        {
            return _contasCorrentes.Find(conta => conta.NumeroConta == numeroConta);
        }

        private void SimularTransacao(TipoTransacao tipo, decimal valor, params int[] numerosContas)
        {
            // transações no banco de dados
        }
    }

