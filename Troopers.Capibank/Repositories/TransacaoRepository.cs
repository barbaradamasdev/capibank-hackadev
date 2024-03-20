using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.Models;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Repositories;

public class TransacaoRepository : ITransacaoRepository
{
    private readonly CapibankContext _context;
    public TransacaoRepository(CapibankContext context)
    {
        _context = context;
    }

    public async Task Deposito(Transacao deposito, int id)
    {
        var conta = await ListarPorId(id);
        
        conta.Depositar(deposito.Valor);
        conta.AlteradaEm = deposito.DataTransacao;
        Transacao t = new()
        {
            TipoTransacao = Operacao.DEPOSITO,
            Valor = deposito.Valor,
            DataTransacao = deposito.DataTransacao,
            ContaId = conta.Id
        };
        await _context.Transacoes.AddAsync(t);
        await _context.SaveChangesAsync();
        
    }

    public async Task<ContaCorrente> ListarPorId(int id)
    {
        var conta = await _context.ContasCorrente.Where(c => c.Id == id).FirstOrDefaultAsync();
        if (conta is null)
            return null;
        return conta;
    }

    public Task<IEnumerable<Transacao>> ListarTodas()
    {
        throw new NotImplementedException();
    }

    public Task<Transacao> Sacar(int id, decimal valor)
    {
        throw new NotImplementedException();
    }

    public Task<Transacao> Transferir(int id, ContaCorrente contaDestino, decimal valor)
    {
        throw new NotImplementedException();
    }
}
