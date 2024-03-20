import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapividaBannerInicialComponent } from './capivida-banner-inicial.component';

describe('CapividaBannerInicialComponent', () => {
  let component: CapividaBannerInicialComponent;
  let fixture: ComponentFixture<CapividaBannerInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapividaBannerInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapividaBannerInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
