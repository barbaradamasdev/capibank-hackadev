import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarSucessoComponent } from './formulario-recuperar-sucesso.component';

describe('FormularioRecuperarSucessoComponent', () => {
  let component: FormularioRecuperarSucessoComponent;
  let fixture: ComponentFixture<FormularioRecuperarSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
