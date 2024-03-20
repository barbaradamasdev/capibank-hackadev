import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeLoginComponent } from './rodape-login.component';

describe('RodapeLoginComponent', () => {
  let component: RodapeLoginComponent;
  let fixture: ComponentFixture<RodapeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapeLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RodapeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
