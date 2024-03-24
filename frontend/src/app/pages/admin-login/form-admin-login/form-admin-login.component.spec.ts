import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminLoginComponent } from './form-admin-login.component';

describe('FormAdminLoginComponent', () => {
  let component: FormAdminLoginComponent;
  let fixture: ComponentFixture<FormAdminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAdminLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
