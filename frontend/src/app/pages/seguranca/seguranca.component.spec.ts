import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaComponent } from './seguranca.component';

describe('SegurancaComponent', () => {
  let component: SegurancaComponent;
  let fixture: ComponentFixture<SegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegurancaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
