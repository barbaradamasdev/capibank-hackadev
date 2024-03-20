import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerCheioComponent } from './home-banner-cheio.component';

describe('HomeBannerCheioComponent', () => {
  let component: HomeBannerCheioComponent;
  let fixture: ComponentFixture<HomeBannerCheioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBannerCheioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBannerCheioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
