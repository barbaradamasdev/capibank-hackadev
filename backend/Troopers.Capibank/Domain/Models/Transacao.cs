using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Troopers.Capibank.Domain.Enums;

namespace Troopers.Capibank.Domain.Entities
{
    public class Transacao
    {
    public int IdTransacao { get; set; }
    public Operacao TipoTransacao { get; set; }
    public decimal ValorTransacao { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
    public SituacaoConta Situacao { get; set; }

    public void Transferir ( contaOrigem co, contaDestino cd, decimal valor )
    {
        if (contaOrigem.Saldo < valor)
        {
            throw new InvalidOperationException("Saldo insuficiente");
        }

        contaOrigem.Sacar(valor);
        contaDestino.Depositar(valor);
    }


    public void Depositar(decimal valor)
    {
        if ( valor <= 0 )
        {
            throw new ArgumentException("O valor deve ser maior que zero.", nameof(valor)); 
        }
        Saldo += valor;
    }

    public void Sacar(decimal valor)
    {
        if (valor <= 0)
        {
            throw new ArgumentException("Valor de saque deve ser maior que zero.", nameof(valor));
        }

        if ( valor > Saldo ) 
        {
            throw new InvalidOperationException("Saldo insuficiente para sacar.");
        }

        Saldo -= valor; 
    }


    }

}