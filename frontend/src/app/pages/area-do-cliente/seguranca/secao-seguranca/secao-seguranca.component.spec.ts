import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoSegurancaComponent } from './secao-seguranca.component';

describe('SecaoSegurancaComponent', () => {
  let component: SecaoSegurancaComponent;
  let fixture: ComponentFixture<SecaoSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecaoSegurancaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecaoSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
