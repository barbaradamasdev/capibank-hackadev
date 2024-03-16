import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAdvanceOnInputDirective]',
  standalone: true
})
export class AdvanceOnInputDirective {
  @HostListener('input', ['$event'])
  @HostListener('keydown', ['$event'])
  onInput(event: any) {
    const target = event.target as HTMLInputElement;
    if (target.value.length === target.maxLength) {
      const nextInput = target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    } else if (event.key === 'Backspace' && target.value === '') {
      const previousInput = target.previousElementSibling as HTMLInputElement;
      if (previousInput) {
        previousInput.focus();
      }
    }
  }
}
