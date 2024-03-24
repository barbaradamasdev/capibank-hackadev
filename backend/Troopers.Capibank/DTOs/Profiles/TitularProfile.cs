using AutoMapper;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.DTOs.Profiles;

public class TitularProfile : Profile
{
    public TitularProfile() : base()
    {
        CreateMap<TitularCreateRequestDTO, Titular>().ReverseMap();
        CreateMap<TitularResponseDTO, Titular>().ReverseMap();
        CreateMap<TitularAlterarRequestDTO, Titular>().ReverseMap();
        CreateMap<TitularLoginEmailResponseDTO, Titular>().ReverseMap();
        CreateMap<TitularLoginCPFResponseDTO, Titular>().ReverseMap();
        CreateMap<TitularSaldoResponseDTO, Titular>().ReverseMap();
        CreateMap<TitularAtendimentoResponseDTO, Titular>().ReverseMap();
    }
}
