export interface Cliente {
  email?: string | null;
  senha?: string | null;
  token?: string | null;
  nome?: string | null;
  cpf?: string | null;
  numeroConta?: string | null;
  tipoConta?: string | null;
  endereco?: string | null;
  telefone?: string | null;
  dataNascimento?: string | null;
  profissao?: string | null;
  rendaMensal?: number | null;
  foto?: string | null;
  historicoTransacoes?: string[] | null;
  documentosAnexados?: string[] | null;
}
