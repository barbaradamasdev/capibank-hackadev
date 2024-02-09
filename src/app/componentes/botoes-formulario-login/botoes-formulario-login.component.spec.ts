import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesFormularioLoginComponent } from './botoes-formulario-login.component';

describe('BotoesFormularioLoginComponent', () => {
  let component: BotoesFormularioLoginComponent;
  let fixture: ComponentFixture<BotoesFormularioLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesFormularioLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotoesFormularioLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
