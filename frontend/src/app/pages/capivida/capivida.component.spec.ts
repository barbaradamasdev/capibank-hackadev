import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapividaComponent } from './capivida.component';

describe('CapividaComponent', () => {
  let component: CapividaComponent;
  let fixture: ComponentFixture<CapividaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapividaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapividaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
