using Microsoft.EntityFrameworkCore;

namespace Troppers.Capibank.Data.Context;

public class CapibankContext : DbContext
{
    public CapibankContext(DbContextOptions<CapibankContext> options)
       : base(options) { }

}
