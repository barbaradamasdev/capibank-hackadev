import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Transacao } from '../Models/Transacao';
import { Observable, map } from 'rxjs';
import { Titular } from '../Models/Titular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `${environment.ApiUrl}`;

  constructor(private http: HttpClient) { }

  GetTransacoes() : Observable<Transacao[]> {
    return this.http.get<Transacao[]>(`${this.apiUrl}Transacao/listartransacoes/1`)
  }

  GetTitulares() : Observable<Titular[]> {
    return this.http.get<Titular[]>(`${this.apiUrl}Titular/listartodos/`)
  }

  GetTitularPorId(idConta:number) : Observable<Titular> {
    return this.http.get<Titular>(`${this.apiUrl}Titular/listarporid/${idConta}`)
  }

  PostSaque(idConta: number, valorSaque: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}Transacao/sacar/${idConta}`, { valor: valorSaque });
  }

  PostDeposito(idConta: number, valorDeposito: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}Transacao/depositar/${idConta}`, { valor: valorDeposito });
  }

}
