using System;

namespace Troopers.Capibank.Domain.Entities
{
    public class AppDbContext : DbContext
    {
        public DbSet<Atendimento> Atendimentos { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
        {

        }
    }
}
