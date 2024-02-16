import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarSenhaComponent } from './formulario-criar-senha.component';

describe('FormularioCriarSenhaComponent', () => {
  let component: FormularioCriarSenhaComponent;
  let fixture: ComponentFixture<FormularioCriarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
