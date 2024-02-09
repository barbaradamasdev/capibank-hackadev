import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEntrarComponent } from './formulario-entrar.component';

describe('FormularioEntrarComponent', () => {
  let component: FormularioEntrarComponent;
  let fixture: ComponentFixture<FormularioEntrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioEntrarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEntrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
