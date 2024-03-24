import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoDepositoComponent } from './confirmacao-deposito.component';

describe('ConfirmacaoDepositoComponent', () => {
  let component: ConfirmacaoDepositoComponent;
  let fixture: ComponentFixture<ConfirmacaoDepositoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoDepositoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoDepositoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
