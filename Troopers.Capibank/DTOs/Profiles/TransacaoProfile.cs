using AutoMapper;
using Troopers.Capibank.Domain.Models;
using Troopers.Capibank.DTOs.Request;
using Troopers.Capibank.DTOs.Response;

namespace Troopers.Capibank.DTOs.Profiles;

public class TransacaoProfile : Profile
{
    public TransacaoProfile() : base()
    {
        CreateMap<TransacaoDepositoDTO, Transacao>().ReverseMap();
        CreateMap<TransacaoResponseDTO, Transacao>().ReverseMap();
    }
}
