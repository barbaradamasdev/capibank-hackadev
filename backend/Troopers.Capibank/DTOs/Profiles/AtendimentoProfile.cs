using AutoMapper;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.DTOs.Profiles;

public class AtendimentoProfile : Profile
{
    public AtendimentoProfile() : base()
    {
        CreateMap<AtendimentoResponseDTO, Atendimento>().ReverseMap();
        CreateMap<AtendimentoAlteracaoRequestDTO, Atendimento>().ReverseMap();
        CreateMap<AtendimentoCreateRequestDTO, Atendimento>().ReverseMap();
        
    }
}
