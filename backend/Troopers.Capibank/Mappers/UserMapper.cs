using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.DTO.User;

namespace Troopers.Capibank.Mappers;

public class UserMapper(IMapper<AddressEntity, AddressDto> addressMapper) : IMapper<UserEntity, UserDto>
{
    public UserEntity FromDTO(UserDto dto)
    {
        return new UserEntity(
            dto.Id,
            dto.Fullname,
            dto.Email,
            dto.Password,
            dto.Birthday,
            dto.Phone,
            addressMapper.FromDTO(dto.Address),
            dto.Role
        );
    }

    public UserDto FromEntity(UserEntity entity)
    {
        return new UserDto(
            entity.Id,
            entity.Fullname,
            entity.Email,
            entity.Password,
            entity.Birthday,
            entity.Phone,
            addressMapper.FromEntity(entity.Address),
            entity.Role
        );
    }
}