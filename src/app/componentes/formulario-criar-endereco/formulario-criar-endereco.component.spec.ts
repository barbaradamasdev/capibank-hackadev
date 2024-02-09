import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarEnderecoComponent } from './formulario-criar-endereco.component';

describe('FormularioCriarEnderecoComponent', () => {
  let component: FormularioCriarEnderecoComponent;
  let fixture: ComponentFixture<FormularioCriarEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
