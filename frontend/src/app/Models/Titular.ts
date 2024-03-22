import { Endereco } from "./Endereco";

export interface Titular {
  id? : number;
  nome?: string | null;
  email?: string | null;
  cpf?: string | null;
  senha?: string | null;
  token?: string | null;
  endereco?: Endereco | null;
}
