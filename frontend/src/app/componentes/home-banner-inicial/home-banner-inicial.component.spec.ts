import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerInicialComponent } from './home-banner-inicial.component';

describe('HomeBannerInicialComponent', () => {
  let component: HomeBannerInicialComponent;
  let fixture: ComponentFixture<HomeBannerInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerInicialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
