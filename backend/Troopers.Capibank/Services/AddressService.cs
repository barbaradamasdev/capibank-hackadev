using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.Auth;
using Troopers.Capibank.Repositories;

namespace Troopers.Capibank.Services;

public interface IAddressService
{
    AddressEntity Create(AddressDto address);
    IEnumerable<AddressEntity> GetAll();
}

public class AddressService(IAddressRepository addressRepository) : IAddressService
{
    public AddressEntity Create(AddressDto address)
    {
        var newAddress = new AddressEntity {
            Id = 0,
            CEP = address.CEP,
            City = address.City,
            Street = address.Street,
            Number = address.Number,
            Complement = address.Complement
        };

        return addressRepository.Create(newAddress);
    }

    public IEnumerable<AddressEntity> GetAll() => addressRepository.GetAll();
}