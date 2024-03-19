namespace Troopers.Capibank.DTOs;

    public class ContaPoupancaDto
    {
        public int NumeroConta { get; set; }
        public decimal ValorDeposito { get; set; }
        public decimal ValorSaque { get; set; }
        public bool VerificarSaldo { get; set; }
        public bool VerificarExtrato { get; set; }
    }
