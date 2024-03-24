export interface Atendimento {
  id: number;
  titular: {
    id: number;
    nome: string;
    email: string;
    };
  descricao: string;
  dataChamado: Date;
  dataResposta: Date;
  emAberto: boolean;
  resposta: string;
}
