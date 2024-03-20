using Troopers.Capibank.Models;

namespace Troopers.Capibank.Models;

public class ContaCorrente : ContaBancaria
{
    public override decimal Depositar(decimal valor)
    {
        Saldo += valor;
        return Saldo;
    }

    public override bool ExcluirConta(int id)
    {
        if (Saldo != 0)
            return false;
        return true;
    }
}