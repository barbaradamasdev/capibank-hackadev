import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDeTransacaoComponent } from './historico-de-transacao.component';

describe('HistoricoDeTransacaoComponent', () => {
  let component: HistoricoDeTransacaoComponent;
  let fixture: ComponentFixture<HistoricoDeTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoDeTransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoDeTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
