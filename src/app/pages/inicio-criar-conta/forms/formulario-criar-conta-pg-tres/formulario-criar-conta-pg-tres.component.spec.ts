import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarContaPgTresComponent } from './formulario-criar-conta-pg-tres.component';

describe('FormularioCriarContaPgTresComponent', () => {
  let component: FormularioCriarContaPgTresComponent;
  let fixture: ComponentFixture<FormularioCriarContaPgTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarContaPgTresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarContaPgTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
