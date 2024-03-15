using Troopers.Capibank.Domain.Entities;
using Troppers.Capibank.Data.Context;

using Microsoft.EntityFrameworkCore;

namespace Troopers.Capibank.Repositories;

public interface IUserRepository
{
    UserEntity Create(UserEntity entity);
    IEnumerable<UserEntity> GetAll();
    UserEntity? GetById(int id);
    UserEntity? GetByEmail(string email);
}

public class UserRepository(CapibankContext dbContext) : IUserRepository
{
    public UserEntity Create(UserEntity entity)
    {
        var trackedEntity = dbContext.Add(entity);
        dbContext.SaveChanges();

        return trackedEntity.Entity;
    }

    public IEnumerable<UserEntity> GetAll()
    {
        return [.. dbContext.Users.Include(p => p.Address)];
    }

    public UserEntity? GetByEmail(string email)
    {
        return dbContext.Users
            .Include(p => p.Address)
            .Where(e => e.Email == email)
            .First();
    }

    public UserEntity? GetById(int id)
    {
        return dbContext.Users
            .Include(p => p.Address)
            .Where(e => e.Id == id)
            .First();
    }
}