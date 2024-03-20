import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransacaoComponent } from './nova-transacao.component';

describe('NovaTransacaoComponent', () => {
  let component: NovaTransacaoComponent;
  let fixture: ComponentFixture<NovaTransacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovaTransacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NovaTransacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
