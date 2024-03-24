import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtalhosComponent } from './atalhos.component';

describe('AtalhosComponent', () => {
  let component: AtalhosComponent;
  let fixture: ComponentFixture<AtalhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtalhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtalhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
