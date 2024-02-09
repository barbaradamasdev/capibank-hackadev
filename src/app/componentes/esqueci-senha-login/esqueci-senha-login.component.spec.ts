import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueciSenhaLoginComponent } from './esqueci-senha-login.component';

describe('EsqueciSenhaLoginComponent', () => {
  let component: EsqueciSenhaLoginComponent;
  let fixture: ComponentFixture<EsqueciSenhaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsqueciSenhaLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsqueciSenhaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
