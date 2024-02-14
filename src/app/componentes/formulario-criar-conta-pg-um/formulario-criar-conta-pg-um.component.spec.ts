import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarContaPgUmComponent } from './formulario-criar-conta-pg-um.component';

describe('FormularioCriarContaPgUmComponent', () => {
  let component: FormularioCriarContaPgUmComponent;
  let fixture: ComponentFixture<FormularioCriarContaPgUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarContaPgUmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarContaPgUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
