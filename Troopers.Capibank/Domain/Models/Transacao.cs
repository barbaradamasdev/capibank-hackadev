using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Troopers.Capibank.Domain.Enums;
using Troopers.Capibank.Models;

namespace Troopers.Capibank.Domain.Entities;

public class Transacao
{
    public int Id { get; set; }
    public Operacao TipoTransacao { get; set; }
    public decimal Valor { get; set; }
    public DateTime DataTransacao { get; set; } = DateTime.Now;
    public SituacaoConta Situacao { get; set; }
    public int ContaDestinoOrigemId { get; set; }
    public int ContaId { get; set; }
    public virtual ContaBancaria? Conta{ get; set; }



}