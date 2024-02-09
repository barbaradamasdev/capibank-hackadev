import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarNovaSenhaComponent } from './formulario-recuperar-nova-senha.component';

describe('FormularioRecuperarNovaSenhaComponent', () => {
  let component: FormularioRecuperarNovaSenhaComponent;
  let fixture: ComponentFixture<FormularioRecuperarNovaSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarNovaSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarNovaSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
