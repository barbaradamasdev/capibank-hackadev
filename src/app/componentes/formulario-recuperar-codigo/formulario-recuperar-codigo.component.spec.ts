import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarCodigoComponent } from './formulario-recuperar-codigo.component';

describe('FormularioRecuperarCodigoComponent', () => {
  let component: FormularioRecuperarCodigoComponent;
  let fixture: ComponentFixture<FormularioRecuperarCodigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarCodigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
