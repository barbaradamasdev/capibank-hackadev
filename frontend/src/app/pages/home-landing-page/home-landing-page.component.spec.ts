import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingPageComponent } from './home-landing-page.component';

describe('HomeLandingPageComponent', () => {
  let component: HomeLandingPageComponent;
  let fixture: ComponentFixture<HomeLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
