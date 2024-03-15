using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.DTO.User;

namespace Troopers.Capibank.Mappers;

public class AddressMapper : IMapper<AddressEntity, AddressDto>
{
    public AddressEntity FromDTO(AddressDto dto)
    {
        return new AddressEntity(
            dto.Id,
            dto.CEP,
            dto.City,
            dto.Street,
            dto.Number,
            dto.Complement 
        );
    }

    public AddressDto FromEntity(AddressEntity entity)
    {
        return new AddressDto(
            entity.Id,
            entity.CEP,
            entity.City,
            entity.Street,
            entity.Number,
            entity.Complement 
        );
    }
}