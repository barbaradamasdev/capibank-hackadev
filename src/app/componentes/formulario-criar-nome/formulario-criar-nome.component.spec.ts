import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarNomeComponent } from './formulario-criar-nome.component';

describe('FormularioCriarNomeComponent', () => {
  let component: FormularioCriarNomeComponent;
  let fixture: ComponentFixture<FormularioCriarNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarNomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
