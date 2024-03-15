namespace Troopers.Capibank.Mappers;

public interface IMapper<Entity, DTO>
{
    DTO FromEntity(Entity entity);
    Entity FromDTO(DTO dto);
}
