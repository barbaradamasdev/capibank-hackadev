using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Models;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Repositories;

public class ContaCorrenteRepository : IContaCorrenteRepository
{
    private readonly CapibankContext _context;

    public ContaCorrenteRepository(CapibankContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<ContaCorrente>> ListarTodos()
    {
        return await _context.ContasCorrente.AsNoTracking().ToListAsync();
    }
    public async Task<ContaCorrente> ListarPorId(int id)
    {
        var conta = await _context.ContasCorrente.FirstOrDefaultAsync(c => c.Id == id);
        return conta;
    }
    public async Task<ContaCorrente> CriarConta(ContaCorrente contaCorrente)
    {
        _context.ContasCorrente.Add(contaCorrente);
        await _context.SaveChangesAsync();
        return contaCorrente;
    }
    public async Task<ContaCorrente> BloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        conta.BloquearConta();
        return conta;
    }
    public async Task<ContaCorrente> DesbloquearConta(int id)
    {
        var conta = await ListarPorId(id);
        conta.DesbloquearConta();
        return conta;
    }

    public async Task<ContaCorrente> ExcluirConta(int id)
    {
        var conta = ListarPorId(id);
        _context.ContasCorrente.Remove(id);
        await _context.SaveChangesAsync();
        return conta;
    }
}
