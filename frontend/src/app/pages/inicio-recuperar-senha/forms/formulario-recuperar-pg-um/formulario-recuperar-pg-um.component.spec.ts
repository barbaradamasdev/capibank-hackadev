import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarPgUmComponent } from './formulario-recuperar-pg-um.component';

describe('FormularioRecuperarPgUmComponent', () => {
  let component: FormularioRecuperarPgUmComponent;
  let fixture: ComponentFixture<FormularioRecuperarPgUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarPgUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarPgUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
