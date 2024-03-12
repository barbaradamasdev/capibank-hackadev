import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInferiorAreaInternaComponent } from './menu-inferior-area-interna.component';

describe('MenuInferiorAreaInternaComponent', () => {
  let component: MenuInferiorAreaInternaComponent;
  let fixture: ComponentFixture<MenuInferiorAreaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuInferiorAreaInternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuInferiorAreaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
