import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralAdminComponent } from './menu-lateral-admin.component';

describe('MenuLateralAdminComponent', () => {
  let component: MenuLateralAdminComponent;
  let fixture: ComponentFixture<MenuLateralAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
