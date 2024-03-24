import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {
  private transacaoConcluidaSubject = new Subject<void>();

  transacaoConcluida$ = this.transacaoConcluidaSubject.asObservable();

  notificarTransacaoConcluida() {
    this.transacaoConcluidaSubject.next();
  }
}
