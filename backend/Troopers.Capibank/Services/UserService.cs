using BCrypt.Net;

using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.User;
using Troopers.Capibank.Mappers;
using Troopers.Capibank.Repositories;

namespace Troopers.Capibank.Services;

public interface IUserService
{
    UserEntity Create(UserDto dto);
    IEnumerable<UserEntity> GetAll();
    UserEntity? GetById(int id);
    UserEntity? GetByEmail(string email);
}

public class UserService(IUserRepository userRepository, IMapper<UserEntity, UserDto> userMapper) : IUserService
{
    public UserEntity Create(UserDto dto)
    {
        dto.Password = BCrypt.Net.BCrypt.EnhancedHashPassword(dto.Password, 15);
        return userRepository.Create(userMapper.FromDTO(dto));
    }

    public IEnumerable<UserEntity> GetAll()
    {
        return userRepository.GetAll();
    }

    public UserEntity? GetByEmail(string email)
    {
        return userRepository.GetByEmail(email);
    }

    public UserEntity? GetById(int id)
    {
        return userRepository.GetById(id);
    }
}