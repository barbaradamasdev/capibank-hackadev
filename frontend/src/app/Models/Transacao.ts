import { Titular } from "./Titular";
import { TransacaoTipo } from "./TransacaoTipo";

export interface Transacao{
  id:number
  tipoTransacao: number
  valor:number,
  dataTransacao: string,
  situacao:number,
  contaDestinoOrigemId: number;
  contaId: number
  titularContaDestino?: Titular;
}
