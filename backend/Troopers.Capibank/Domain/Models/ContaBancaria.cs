using Troopers.Capibank.Interfaces;
using System.Collections.Generic;

namespace Troopers.Capibank.Models;

public abstract class ContaBancaria : IContaBancaria
{
   public int NumeroConta {get;set;}
   public Titular Titular {get;set;}
   public decimal Saldo {get; protected set;}
   public SituacaoConta SituacaoConta {get;set;}
   public List<Transacao> Transacoes {get;} = new List<Transacao>;
   public ContaBancaria ContaDestino {get; protected set;}

   public virtual void Depositar(decimal valor)
        {
            if (valor <= 0)
            {
                throw new ArgumentException("O valor do depósito deve ser maior que zero.", nameof(valor));
            }

            Saldo += valor;
            Transacoes.Add(new Transacao { Tipo = TipoTransacao.Deposito, Valor = valor });
        }

        public virtual bool Sacar(decimal valor)
        {
            if (valor <= 0)
            {
                throw new ArgumentException("O valor do saque deve ser maior que zero.", nameof(valor));
            }

            if (Saldo < valor)
            {
                return false; // Saldo insuficiente
            }

            Saldo -= valor;
            Transacoes.Add(new Transacao { Tipo = TipoTransacao.Saque, Valor = valor });
            return true;
        }

        public virtual bool Transferir(decimal valor, IContaBancaria destino)
        {
            if (destino == null)
            {
                throw new ArgumentNullException(nameof(destino));
            }

            if (valor <= 0)
            {
                throw new ArgumentException("O valor da transferência deve ser maior que zero.", nameof(valor));
            }

            if (Saldo < valor)
            {
                return false; // Saldo insuficiente
            }

            Saldo -= valor;
            destino.Depositar(valor);
            Transacoes.Add(new Transacao { Tipo = TipoTransacao.Transferencia, Valor = valor, Destino = destino });
            return true;
        }

        public virtual decimal ConsultarSaldo()
        {
            return Saldo;
        }

        public virtual IEnumerable<string> ConsultarExtrato()
        {
            List<string> extrato = new List<string>();
            foreach (var transacao in Transacoes)
            {
                string descricao = $"{transacao.Data} - {transacao.Tipo}: {transacao.Valor:C}";
                if (transacao.Destino != null)
                {
                    descricao += $" (para conta {transacao.Destino.NumeroConta})";
                }
                extrato.Add(descricao);
            }
            return extrato;
        }
   }
