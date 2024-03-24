import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Transacao } from '../Models/Transacao';
import { Observable, map } from 'rxjs';
import { Titular } from '../Models/Titular';
import { ContaCorrente } from '../Models/ContaCorrente';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.ApiUrl}`;
  // static idTitularLogado: undefined;
  idTitularLogado: number = 1; //FIXME remover ao criar login

  constructor(private http: HttpClient) { }

  /////////////////
  /// LOGIN ///////
  /////////////////
  GetLoginPorEmail(email: string,): Observable<Titular> {
    return this.http.get<Titular>(`${this.apiUrl}Titular/loginporemail/${email}`);
  }

  GetNomeESaldo(cpf: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}ContaCorrente/listarporcpf/${cpf}`);
  }


  //////////////
  /// CONTA ////
  //////////////
  PostContaCorrente(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}ContaCorrente/criarconta`, data);
  }

  GetContasCorrentes() : Observable<ContaCorrente[]> {
    return this.http.get<ContaCorrente[]>(`${this.apiUrl}ContaCorrente/listarcontas/`)
  }

  GetContasCorrentesPorId(idConta: number) : Observable<ContaCorrente[]> {
    return this.http.get<ContaCorrente[]>(`${this.apiUrl}ContaCorrente/listarcontas/${idConta}`)
  }

  /////////////////
  /// TITULARES ///
  /////////////////
  GetTitulares() : Observable<Titular[]> {
    return this.http.get<Titular[]>(`${this.apiUrl}Titular/listartodos/`)
  }

  GetTitularPorId(idConta:number) : Observable<Titular> {
    return this.http.get<Titular>(`${this.apiUrl}Titular/listarporid/${idConta}`)
  }

  /////////////////
  /// TRANSACAO ///
  /////////////////
  GetTransacoes() : Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}Transacao/listartransacoes/${this.idTitularLogado}`)
  }

  /////////////////
  /// OPERACAO ///
  /////////////////
  PostSaque(idConta: number, valorSaque: number): Observable<string> {
    const saque = { valor: valorSaque };
    return this.http.post<string>(`${this.apiUrl}Transacao/sacar/${idConta}`, saque);
  }

  PostDeposito(idConta: number, valorDeposito: number): Observable<string> {
    const deposito = { valor: valorDeposito };
    return this.http.post<string>(`${this.apiUrl}Transacao/depositar/${idConta}`, deposito);
  }

  PostTransferencia(valorTransferencia: number, cpfDestino: string, idContaDestino: number): Observable<string> {
    const transferencia = { valor: valorTransferencia, cpf: cpfDestino, id: idContaDestino};
    return this.http.post<string>(`${this.apiUrl}Transacao/transferir/${idContaDestino}`, transferencia);
  }

  ///////////////////
  /// ATENDIMENTO ///
  ///////////////////

  PostAtendimento(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Atendimento/criaratendimento`, data);
  }

}
