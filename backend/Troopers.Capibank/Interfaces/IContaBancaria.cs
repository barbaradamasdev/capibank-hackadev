namespace Troopers.Capibank.Interfaces;

public interface IContaBancaria
{
   public abstract void Depositar(decimal valor);
   public abstract bool Sacar(decimal valor);
   public abstract bool Transferir(decimal valor, IContaBancaria destino);
   public abstract decimal ConsultarSaldo();
   public abstract IEnumerable<string> ConsultarExtrato();
}