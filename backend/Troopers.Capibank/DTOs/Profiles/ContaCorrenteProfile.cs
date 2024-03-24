using AutoMapper;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.DTOs.Profiles;

public class ContaCorrenteProfile : Profile
{
    public ContaCorrenteProfile() : base()
    {
        CreateMap<ContaCorrenteCreateRequestDTO, ContaCorrente>().ReverseMap();
        CreateMap<ContaCorrenteResponseDTO, ContaCorrente>().ReverseMap();
        CreateMap<ContaCorrenteDeleteDTO, ContaCorrente>().ReverseMap();
        CreateMap<ContaCorrenteSaldoResponseDTO, ContaCorrente>().ReverseMap();
    }
}
