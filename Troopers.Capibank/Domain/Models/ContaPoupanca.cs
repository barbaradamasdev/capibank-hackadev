using Troopers.Capibank.Models;

namespace Troopers.Capibank.Models;

public class ContaPoupanca : ContaBancaria
{
    public override bool BloquearConta(int id)
    {
        throw new NotImplementedException();
    }

    public override decimal Depositar(decimal valor)
    {
        throw new NotImplementedException();
    }

    public override bool DesbloquearConta(int id)
    {
        throw new NotImplementedException();
    }

    public override bool ExcluirConta(int id)
    {
        throw new NotImplementedException();
    }

    public override decimal Sacar(decimal valor)
    {
        throw new NotImplementedException();
    }
}