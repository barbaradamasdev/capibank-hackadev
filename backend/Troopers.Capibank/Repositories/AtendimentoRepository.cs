using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Models;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Repositories;

public class AtendimentoRepository : IAtendimentoRepository
{
    private readonly CapibankContext _context;
    public AtendimentoRepository(CapibankContext context)
    {
        _context = context;
    }
    public async Task<IEnumerable<Atendimento>> ListarTodos()
    {
        return await _context.Atendimentos.Include(a=> a.Titular).AsNoTracking().ToListAsync();
    }
    public async Task<Atendimento> ListarPorId(int id)
    {
        return await _context.Atendimentos.Include(a => a.Titular).Where(a => a.Id == id).FirstOrDefaultAsync();
    }
    public async Task<Atendimento> CriarAtendimento(Atendimento atendimento)
    {
        await _context.Atendimentos.AddAsync(atendimento);
        await _context.SaveChangesAsync();
        return atendimento;
    }
    public async Task<Atendimento> ResponderAtendimento(Atendimento atendimento)
    {
        _context.Atendimentos.Update(atendimento);
        await _context.SaveChangesAsync();
        return atendimento;
    }
    public async Task<Atendimento> Excluir(int id)
    {
        var atendimento = await ListarPorId(id);
        _context.Atendimentos.Remove(atendimento);
        await _context.SaveChangesAsync();
        return atendimento;
    }
}
