using Troopers.Capibank.Models;

namespace Troopers.Capibank.Models;

public class ContaPoupanca : ContaBancaria
{
    public override decimal Depositar(decimal valor)
    {
        throw new NotImplementedException();
    }

    public override bool ExcluirConta(int id)
    {
        throw new NotImplementedException();
    }
}