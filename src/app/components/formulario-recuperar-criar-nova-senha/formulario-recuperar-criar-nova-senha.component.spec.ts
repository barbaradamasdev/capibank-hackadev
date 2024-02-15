import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarCriarNovaSenhaComponent } from './formulario-recuperar-criar-nova-senha.component';

describe('FormularioRecuperarCriarNovaSenhaComponent', () => {
  let component: FormularioRecuperarCriarNovaSenhaComponent;
  let fixture: ComponentFixture<FormularioRecuperarCriarNovaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarCriarNovaSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarCriarNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
