import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChamadoComponent } from './form-chamado.component';

describe('FormChamadoComponent', () => {
  let component: FormChamadoComponent;
  let fixture: ComponentFixture<FormChamadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormChamadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
