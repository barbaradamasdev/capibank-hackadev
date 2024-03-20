import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapibankHomeComponent } from './capibank-home.component';

describe('CapibankHomeComponent', () => {
  let component: CapibankHomeComponent;
  let fixture: ComponentFixture<CapibankHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapibankHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapibankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
