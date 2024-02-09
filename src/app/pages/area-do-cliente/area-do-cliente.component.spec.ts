import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDoClienteComponent } from './area-do-cliente.component';

describe('AreaDoClienteComponent', () => {
  let component: AreaDoClienteComponent;
  let fixture: ComponentFixture<AreaDoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaDoClienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaDoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
