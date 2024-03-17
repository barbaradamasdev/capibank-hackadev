using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Troopers.Capibank.Domain.Enums;

namespace Troopers.Capibank.DTOs
{
    public class TransacaoDTO
    {
        public Operacao TipoTransacao { get; set; }
        public decimal ValorTransacao { get; set; }
        public DateTime DataTransacao { get; set; } = DateTime.Now;
    }
}