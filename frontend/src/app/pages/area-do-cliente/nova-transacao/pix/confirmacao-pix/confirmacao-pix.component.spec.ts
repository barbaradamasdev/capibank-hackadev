import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoPixComponent } from './confirmacao-pix.component';

describe('ConfirmacaoPixComponent', () => {
  let component: ConfirmacaoPixComponent;
  let fixture: ComponentFixture<ConfirmacaoPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoPixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmacaoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
