using System;

namespace Troopers.Capibank.Domain.Entities
{
    public interface IAtendimento
    {
        int IdChamado { get; set; }
        string Descricao { get; set; }
        bool EstaResolvido { get; set; }
        DateTime CriadoEm { get; set; }
        DateTime AtualizadoEm { get; set; }
        DateTime FinalizadoEm { get; set; }
        void ConcluirChamado();
        void AbrirChamado();
    }
}
