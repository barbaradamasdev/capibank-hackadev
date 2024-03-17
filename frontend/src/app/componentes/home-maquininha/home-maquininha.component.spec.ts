import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMaquininhaComponent } from './home-maquininha.component';

describe('HomeMaquininhaComponent', () => {
  let component: HomeMaquininhaComponent;
  let fixture: ComponentFixture<HomeMaquininhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMaquininhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMaquininhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
