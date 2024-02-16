import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarSucessoComponent } from './formulario-criar-sucesso.component';

describe('FormularioCriarSucessoComponent', () => {
  let component: FormularioCriarSucessoComponent;
  let fixture: ComponentFixture<FormularioCriarSucessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarSucessoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
