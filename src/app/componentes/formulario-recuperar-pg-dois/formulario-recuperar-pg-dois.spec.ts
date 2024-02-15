import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRecuperarPgDoisComponent } from './formulario-recuperar-pg-dois.component';

describe('FormularioRecuperarPgDoisComponent', () => {
  let component: FormularioRecuperarPgDoisComponent;
  let fixture: ComponentFixture<FormularioRecuperarPgDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioRecuperarPgDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioRecuperarPgDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
