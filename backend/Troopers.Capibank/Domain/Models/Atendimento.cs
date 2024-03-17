using System;

namespace Troopers.Capibank.Domain.Entities
{
    public class Atendimento : IAtendimento
    {
        [Key]
        [Required]
        public int IdChamado { get; set; }

        [Required]
        publuc string Nome { get; set; } = null!;
        public string? Descricao { get; set; }
        public bool EstaResolvido { get; set; } = true;
        public DateTime? CriadoEm { get; set; } = DateTime.Now;
        public DateTime? AtualizadoEm { get; set; } = DateTime.now;
        public DateTime? FinalizadoEm { get; set; } = null;

        public void ConcluirChamado()
        {
            EstaResolvido = true;
            FinalizadoEm = DateTime.Now;
        }

        public void AbrirChamado()
        {
            EstaResolvido = false;
            CriadoEm = DateTime.Now;
            AtualizadoEm = DateTime.Now;
            FinalizadoEm = DateTime.MinValue;
        }
    }
}
