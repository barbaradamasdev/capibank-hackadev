import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecaoInicioComponent } from './home-secao-inicio.component';

describe('HomeSecaoInicioComponent', () => {
  let component: HomeSecaoInicioComponent;
  let fixture: ComponentFixture<HomeSecaoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSecaoInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSecaoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
