import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCtaComponent } from './home-cta.component';

describe('HomeCtaComponent', () => {
  let component: HomeCtaComponent;
  let fixture: ComponentFixture<HomeCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCtaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
