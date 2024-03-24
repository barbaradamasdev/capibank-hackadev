import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacaoComponent } from './validacao.component';

describe('ValidacaoComponent', () => {
  let component: ValidacaoComponent;
  let fixture: ComponentFixture<ValidacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
