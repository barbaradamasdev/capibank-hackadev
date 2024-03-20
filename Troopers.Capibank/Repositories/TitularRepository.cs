using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Models;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Repositories;

public class TitularRepository : ITitularRepository
{
    private readonly CapibankContext _context;

    public TitularRepository(CapibankContext context)
    {
        _context = context;
    }
    public async Task<IEnumerable<Titular>> ListarTodos()
    {
        return await _context.Titulares.Include(t => t.Endereco).AsNoTracking().ToListAsync();
    }

    public async Task<Titular> ListarPorId(int id)
    {
        return await _context.Titulares.Include(t => t.Endereco).Where(t=>t.Id == id).AsNoTracking().FirstOrDefaultAsync();
    }
    public async Task<Titular> Alterar(Titular titular)
    {
        if (titular is null)
            throw new ArgumentNullException(nameof(titular));
        _context.Entry(titular).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return titular;
    }
}
