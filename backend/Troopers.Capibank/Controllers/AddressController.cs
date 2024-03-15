using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

[Route("/api/v1/addresses")]
[ApiController]
public class AddressController(IAddressService addressService) : ControllerBase
{
    [HttpPost]
    public AddressDto Create(AddressDto address)
    {
        AddressEntity entity = addressService.Create(address);
        return new AddressDto(
            entity.Id,
            entity.CEP,
            entity.City,
            entity.Street,
            entity.Number,
            entity.Complement
        );
    }

    [HttpGet]
    public IEnumerable<AddressDto> GetAll() {
        var entities = addressService.GetAll();
        var dtos = new List<AddressDto>();

        foreach (var entity in entities)
        {
            var dto = new AddressDto(
                entity.Id,
                entity.CEP,
                entity.City,
                entity.Street,
                entity.Number,
                entity.Complement
            );

            dtos.Add(dto);
        }

        return dtos;
    }
}