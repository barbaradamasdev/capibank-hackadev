import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../../../../Models/Cliente';
import { CLIENTES } from '../../../../../Data/Dados-clientes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-destinatario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './destinatario.component.html',
  styleUrl: './destinatario.component.css'
})
export class DestinatarioComponent {
  isCpfValido: boolean  = true;
  clientes: Cliente[] = CLIENTES;

  constructor(private router: Router) {}

  destinatario = new FormGroup({
    cpf: new FormControl('', [Validators.required]),
  });

  get cpf() {
    return this.destinatario.get('cpf');
  }

  validarCPF(cpf: string): boolean {
    const clienteEncontrado = this.clientes.find(cliente => cliente.cpf === cpf);
    return clienteEncontrado !== undefined;
  }

  salvarValor() {
    const cpfDestino: string = (this.cpf?.value ?? '').toString();
    const cpfValido = this.validarCPF(cpfDestino);
    if (cpfValido) {
      localStorage.setItem('cpfDestino', cpfDestino.toString());
      this.router.navigateByUrl('/cliente/nova/transferencia/validacao');
    } else {
      this.isCpfValido = false;
    }

  }
}
