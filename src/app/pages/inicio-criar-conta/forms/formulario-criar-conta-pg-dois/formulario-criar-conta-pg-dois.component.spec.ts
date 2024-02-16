import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCriarContaPgDoisComponent } from './formulario-criar-conta-pg-dois.component';

describe('FormularioCriarContaPgDoisComponent', () => {
  let component: FormularioCriarContaPgDoisComponent;
  let fixture: ComponentFixture<FormularioCriarContaPgDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCriarContaPgDoisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCriarContaPgDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
