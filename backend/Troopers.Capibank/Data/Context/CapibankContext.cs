using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.Models;

namespace Troppers.Capibank.Data.Context;

public class CapibankContext : DbContext
{
    public CapibankContext(DbContextOptions<CapibankContext> options)
       : base(options) { }

    public DbSet<ContaCorrente> ContasCorrente { get; set; }
    public DbSet<Titular> Titulares { get; set; }
    public DbSet<Endereco> Enderecos { get; set; }
    public DbSet<Transacao> Transacoes { get; set; }
    public DbSet<Atendimento> Atendimentos {  get; set; }
}
