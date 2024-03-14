import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapividaCtaComponent } from './capivida-cta.component';

describe('CapividaCtaComponent', () => {
  let component: CapividaCtaComponent;
  let fixture: ComponentFixture<CapividaCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapividaCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapividaCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
