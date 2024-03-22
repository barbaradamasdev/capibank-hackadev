export interface ContaCorrente {
  id: number;
  numeroConta: number;
  titular: {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    senha: string;
    criadoEm: Date;
    alteradoEm: Date;
    endereco: {
      id: number;
      cep: string;
      logradouro: string;
      numero: string;
      complemento: string;
      bairro: string;
      cidade: string;
      uf: string;
    };
  };
  estaAtiva: boolean;
  criadaEm: Date;
  alteradaEm: Date;
  bloqueadaEm: Date;
}
