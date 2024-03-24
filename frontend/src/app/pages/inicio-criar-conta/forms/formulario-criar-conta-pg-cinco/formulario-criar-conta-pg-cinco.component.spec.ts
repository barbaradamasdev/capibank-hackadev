import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarContaPgCincoComponent } from './formulario-criar-conta-pg-cinco.component';

describe('FormularioCriarContaPgCincoComponent', () => {
  let component: FormularioCriarContaPgCincoComponent;
  let fixture: ComponentFixture<FormularioCriarContaPgCincoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarContaPgCincoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarContaPgCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
