import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarContaPgQuatroComponent } from './formulario-criar-conta-pg-quatro.component';

describe('FormularioCriarContaPgQuatroComponent', () => {
  let component: FormularioCriarContaPgQuatroComponent;
  let fixture: ComponentFixture<FormularioCriarContaPgQuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarContaPgQuatroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarContaPgQuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
