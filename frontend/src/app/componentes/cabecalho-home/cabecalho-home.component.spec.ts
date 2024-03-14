import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoHomeComponent } from './cabecalho-home.component';

describe('CabecalhoHomeComponent', () => {
  let component: CabecalhoHomeComponent;
  let fixture: ComponentFixture<CabecalhoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecalhoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
