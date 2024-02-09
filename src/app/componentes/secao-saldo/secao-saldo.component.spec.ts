import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSaldoComponent } from './secao-saldo.component';

describe('SecaoSaldoComponent', () => {
  let component: SecaoSaldoComponent;
  let fixture: ComponentFixture<SecaoSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoSaldoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecaoSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
