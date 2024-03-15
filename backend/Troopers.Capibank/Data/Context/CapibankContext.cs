using Microsoft.EntityFrameworkCore;
using Troopers.Capibank.Domain.Entities;

namespace Troppers.Capibank.Data.Context;

public class CapibankContext(DbContextOptions<CapibankContext> options) : DbContext(options)
{
    public DbSet<AddressEntity> Addresses { get; set; }
    public DbSet<UserEntity> Users { get; set; }
}
