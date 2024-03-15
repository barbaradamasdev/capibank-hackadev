using Troopers.Capibank.Domain.Entities;
using Troppers.Capibank.Data.Context;

namespace Troopers.Capibank.Repositories;

public interface IAddressRepository
{
    AddressEntity Create(AddressEntity entity);
    IEnumerable<AddressEntity> GetAll();
}

public class AddressRepository(CapibankContext dbContext) : IAddressRepository
{
    public AddressEntity Create(AddressEntity entity)
    {
        var trackedEntity = dbContext.Add(entity);
        dbContext.SaveChanges();

        return trackedEntity.Entity;
    }

    public IEnumerable<AddressEntity> GetAll() => [.. dbContext.Set<AddressEntity>()];
}