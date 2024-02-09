import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoAreaInternaComponent } from './cabecalho-area-interna.component';

describe('CabecalhoAreaInternaComponent', () => {
  let component: CabecalhoAreaInternaComponent;
  let fixture: ComponentFixture<CabecalhoAreaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoAreaInternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecalhoAreaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
