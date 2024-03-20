import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapividaPilaresComponent } from './capivida-pilares.component';

describe('CapividaPilaresComponent', () => {
  let component: CapividaPilaresComponent;
  let fixture: ComponentFixture<CapividaPilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapividaPilaresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapividaPilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
