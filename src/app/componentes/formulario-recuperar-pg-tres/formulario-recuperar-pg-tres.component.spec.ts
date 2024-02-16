import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarPgTresComponent } from './formulario-recuperar-pg-tres.component';

describe('FormularioRecuperarPgTresComponent', () => {
  let component: FormularioRecuperarPgTresComponent;
  let fixture: ComponentFixture<FormularioRecuperarPgTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarPgTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarPgTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
