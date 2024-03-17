import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBeneficiosComponent } from './home-beneficios.component';

describe('HomeBeneficiosComponent', () => {
  let component: HomeBeneficiosComponent;
  let fixture: ComponentFixture<HomeBeneficiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBeneficiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeBeneficiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
