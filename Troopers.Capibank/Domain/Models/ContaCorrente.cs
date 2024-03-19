using Troopers.Capibank.Models;

namespace Troopers.Capibank.Models;

    public class ContaCorrente : ContaBancaria
    {
       public ContaCorrente(int numeroConta,  Titular titular) : base(numeroConta, titular)
       {
        
       }
    }