import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-criar-conta-pg-um',
  standalone: true,
  imports: [RouterLink ,],
  templateUrl: './formulario-criar-conta-pg-um.component.html',
  styleUrl: './formulario-criar-conta-pg-um.component.css'
})
export class FormularioCriarContaPgUmComponent {
  formatarDataNascimento(event: any): void {
    let valor = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (valor.length > 8) {
      valor = valor.slice(0, 8); // Garante que não haverá mais de 8 dígitos
    }
    valor = valor.replace(/(\d{2})(\d)/, '$1/$2'); // Insere a primeira barra
    valor = valor.replace(/(\d{2})(\d{4})$/, '$1/$2'); // Insere a segunda barra
    event.target.value = valor; // Atualiza o valor do campo
  
    // Se tivermos uma data completa (dd/mm/yyyy), vamos validá-la
    if (valor.length === 10) {
      const partes = valor.split('/');
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10);
      const ano = parseInt(partes[2], 10);
      
      const data = new Date(ano, mes - 1, dia);
      const dataValida = data.getFullYear() === ano && data.getMonth() + 1 === mes && data.getDate() === dia;
      
      if (!dataValida) {
        alert("Data inválida. Por favor, insira uma data válida no formato dd/mm/aaaa.");
        event.target.value = ''; // Limpa o campo
      }
    }
  }
  

  formatarTelefone(event: any): void {
    let valor = event.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Limita a quantidade de dígitos no telefone
    valor = valor.substring(0, 15);
  
    // Adiciona o prefixo (55) apenas se ele ainda não estiver lá
    const prefixo = '(55) ';
    if (!valor.startsWith('55')) {
      valor = '55' + valor;
    }
  
    // Adiciona os espaços e hífen para o formato (55) XXXXX-XXXX
    valor = valor.replace(/(\d{2})(\d{5})(\d{6}).*/, '$1 $2-$3');
  
    // Atualiza o valor do input
    event.target.value = prefixo + valor.substring(2);
  }
  

  // Função para prevenir a entrada de caracteres não numéricos
  apenasNumeros(event: KeyboardEvent): boolean {
    const teclasPermitidas = ['Tab', 'Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (teclasPermitidas.indexOf(event.key) !== -1 || /[0-9]/.test(event.key)) {
      return true;
    }
    event.preventDefault();
    return false;
  }
}
