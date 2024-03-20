using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTOs;

namespace Troopers.Capibank.DTOs.Profiles
{
    public class TransacaoProfile : Profile
    {
        public TransacaoProfile()
        {
            CreateMap<TransacaoDTO, Transacao>();
        }
    }
}