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

   public abstract void Depositar(decimal valor);
   public abstract bool Sacar(decimal valor);
   public abstract bool Transferir(decimal valor, IContaBancaria destino);
   public abstract decimal ConsultarSaldo();
   public abstract IEnumerable<string> ConsultarExtrato(); 
}