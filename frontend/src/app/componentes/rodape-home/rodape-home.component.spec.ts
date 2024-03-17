import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapeHomeComponent } from './rodape-home.component';

describe('RodapeHomeComponent', () => {
  let component: RodapeHomeComponent;
  let fixture: ComponentFixture<RodapeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RodapeHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RodapeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
