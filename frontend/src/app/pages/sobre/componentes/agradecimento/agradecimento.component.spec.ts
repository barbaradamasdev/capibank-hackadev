import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimentoComponent } from './agradecimento.component';

describe('AgradecimentoComponent', () => {
  let component: AgradecimentoComponent;
  let fixture: ComponentFixture<AgradecimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgradecimentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgradecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
