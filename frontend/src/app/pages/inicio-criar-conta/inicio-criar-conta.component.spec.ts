import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCriarContaComponent } from './inicio-criar-conta.component';

describe('InicioCriarContaComponent', () => {
  let component: InicioCriarContaComponent;
  let fixture: ComponentFixture<InicioCriarContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioCriarContaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioCriarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
