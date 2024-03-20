using System;
using System.Collections.Generic;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Services;

    public class ContaPoupancaService : IContaPoupancaService
    {
        private readonly List<ContaPoupanca> _contasPoupanca;

        public ContaPoupancaService()
        {
            _contasPoupanca = new List<ContaPoupanca>();
        }

        public void Depositar(int numeroConta, decimal valor)
        {
            var contaPoupanca = ObterContaPoupancaPorNumero(numeroConta);

            if (contaPoupanca == null)
            {
                throw new ArgumentException("Conta poupança não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do depósito deve ser maior que zero.");
            }

            contaPoupanca.Saldo += valor;
            AdicionarTransacao(contaPoupanca, TipoTransacao.Deposito, valor);
        }

        public bool Sacar(int numeroConta, decimal valor)
        {
            var contaPoupanca = ObterContaPoupancaPorNumero(numeroConta);

            if (contaPoupanca == null)
            {
                throw new ArgumentException("Conta poupança não encontrada.");
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor do saque deve ser maior que zero.");
            }

            if (contaPoupanca.Saldo < valor)
            {
                return false; // Saldo insuficiente
            }

            contaPoupanca.Saldo -= valor;
            AdicionarTransacao(contaPoupanca, TipoTransacao.Saque, valor);

            return true;
        }

        public decimal ConsultarSaldo(int numeroConta)
        {
            var contaPoupanca = ObterContaPoupancaPorNumero(numeroConta);

            if (contaPoupanca == null)
            {
                throw new ArgumentException("Conta poupança não encontrada.");
            }

            return contaPoupanca.Saldo;
        }

        public IEnumerable<string> ConsultarExtrato(int numeroConta)
        {
            var contaPoupanca = ObterContaPoupancaPorNumero(numeroConta);

            if (contaPoupanca == null)
            {
                throw new ArgumentException("Conta poupança não encontrada.");
            }

            return contaPoupanca.Transacoes;
        }

        private ContaPoupanca ObterContaPoupancaPorNumero(int numeroConta)
        {
            return _contasPoupanca.Find(conta => conta.NumeroConta == numeroConta);
        }

        private void AdicionarTransacao(ContaPoupanca conta, TipoTransacao tipo, decimal valor)
        {
            string descricao = $"{DateTime.Now} - {tipo}: {valor:C}";
            conta.Transacoes.Add(descricao);
        }
    }

