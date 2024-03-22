import { AbstractControl, ValidatorFn } from '@angular/forms';

export function cpfLengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const cpf = control.value as string;
    const isCpfValid = cpf && cpf.length === 11;
    return isCpfValid ? null : { 'cpfLength': true };
  };
}
