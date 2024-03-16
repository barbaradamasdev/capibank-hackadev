using System;

namespace Troopers.Capibank.Domain.Entities
{
    public class Atendimento : IAtendimento
    {
        public int IdChamado { get; set; }
        public string Descricao { get; set; }
        public bool EstaResolvido { get; set; }
        public DateTime CriadoEm { get; set; }
        public DateTime AtualizadoEm { get; set; }
        public DateTime FinalizadoEm { get; set; }

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
