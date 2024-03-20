import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoSaqueComponent } from './confirmacao-saque.component';

describe('ConfirmacaoSaqueComponent', () => {
  let component: ConfirmacaoSaqueComponent;
  let fixture: ComponentFixture<ConfirmacaoSaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoSaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
