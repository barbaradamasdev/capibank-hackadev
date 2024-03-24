import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoTransferenciaComponent } from './confirmacao-transferencia.component';

describe('ConfirmacaoTransferenciaComponent', () => {
  let component: ConfirmacaoTransferenciaComponent;
  let fixture: ComponentFixture<ConfirmacaoTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoTransferenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
