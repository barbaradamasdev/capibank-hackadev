import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-criar-conta-pg-um',
  standalone: true,
  imports: [RouterLink ,],
  templateUrl: './formulario-criar-conta-pg-um.component.html',
  styleUrls: ['../../../../../form.css', './formulario-criar-conta-pg-um.component.css']
})
export class FormularioCriarContaPgUmComponent {
  formatarDataNascimento(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');
    if (valor.length > 8) {
      valor = valor.slice(0, 8);
    }
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2');
    valor = valor.replace(/(\d{2})(\d{4})$/, '$1/$2');
    event.target.value = valor;

    if (valor.length === 10) {
      const partes = valor.split('/');
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);

      const data = new Date(ano, mes - 1, dia);
      const dataValida = data.getFullYear() === ano && data.getMonth() + 1 === mes && data.getDate() === dia;

      if (!dataValida) {
        alert("Data inválida. Por favor, insira uma data válida no formato dd/mm/aaaa.");
        event.target.value = '';
      }
    }
  }

  formatarTelefone(event: any): void {
    let valor = event.target.value.replace(/\D/g, '');
    valor = valor.substring(0, 15);

    const prefixo = '(55) ';
    if (!valor.startsWith('55')) {
      valor = '55' + valor;
    }
    valor = valor.replace(/(\d{2})(\d{5})(\d{6}).*/, '$1 $2-$3');
    event.target.value = prefixo + valor.substring(2);
  }

  apenasNumeros(event: KeyboardEvent): boolean {
    const teclasPermitidas = ['Tab', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (teclasPermitidas.indexOf(event.key) !== -1 || /[0-9]/.test(event.key)) {
      return true;
    }
    event.preventDefault();
    return false;
  }
}
