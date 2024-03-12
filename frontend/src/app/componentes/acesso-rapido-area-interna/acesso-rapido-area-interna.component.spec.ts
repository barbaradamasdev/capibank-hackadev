import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoRapidoAreaInternaComponent } from './acesso-rapido-area-interna.component';

describe('AcessoRapidoAreaInternaComponent', () => {
  let component: AcessoRapidoAreaInternaComponent;
  let fixture: ComponentFixture<AcessoRapidoAreaInternaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoRapidoAreaInternaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcessoRapidoAreaInternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
