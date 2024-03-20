using System;
using System.Collections.Generic;

namespace Troopers.Capibank.Services;

    public interface IContaCorrenteService
    {
        void Depositar(int numeroConta, decimal valor);
        bool Sacar(int numeroConta, decimal valor);
        bool Transferir(int numeroContaOrigem, int numeroContaDestino, decimal valor);
        decimal ConsultarSaldo(int numeroConta);
        IEnumerable<string> ConsultarExtrato(int numeroConta);
    }
