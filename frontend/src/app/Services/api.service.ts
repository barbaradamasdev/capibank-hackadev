import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Transacao } from '../Models/Transacao';
import { Observable } from 'rxjs';
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
    return this.http.get<Titular[]>(`${this.apiUrl}Titular/listarporid/`)
  }

  GetTitularPorId(id:number) : Observable<Titular> {
    return this.http.get<Titular>(`${this.apiUrl}Titular/listarporid/${id}`)
  }

  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   if (error.error instanceof ErrorEvent) {
  //     // Erro do lado do cliente
  //     console.error('Ocorreu um erro:', error.error.message);
  //   } else {
  //     // O backend retornou um código de status de erro
  //     console.error(
  //       `Código de status ${error.status}, ` +
  //       `Erro: ${error.error}`);
  //   }
  //   // Retorna um Observable com uma mensagem de erro para o componente
  //   return throwError('Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.');
  // }

  // listarTransacoes(id: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/Transacao/listartransacoes/${id}`)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
}
