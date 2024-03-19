namespace Troopers.Capibank.DTOs;

    public class ContaEmpresarialTransacoesDto
    {
        public int NumeroConta { get; set; }
        public decimal ValorDeposito { get; set; }
        public decimal ValorSaque { get; set; }
        public int NumeroContaDestinoTransferencia { get; set; }
        public decimal ValorTransferencia { get; set; }
        public bool VerificarSaldo { get; set; }
        public bool VerificarExtrato { get; set; }
    }

