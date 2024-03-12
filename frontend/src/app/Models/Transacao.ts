import { TransacaoTipo } from "./TransacaoTipo";

export interface Transacao{
    transacaoTipo: TransacaoTipo,
    tipo:string,
    valor:number,
    motivo:string,
    data:string
}