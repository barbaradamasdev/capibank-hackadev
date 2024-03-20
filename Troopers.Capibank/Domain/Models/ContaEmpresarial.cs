using Troopers.Capibank.Models;

namespace Troopers.Capibank.Models;

    public class ContaEmpresarial : ContaBancaria
    {
        public int CNPJ { get; set; }

    public override decimal Depositar(decimal valor)
    {
        throw new NotImplementedException();
    }

    public override bool ExcluirConta(int id)
    {
        throw new NotImplementedException();
    }
}
