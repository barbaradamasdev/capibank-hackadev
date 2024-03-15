import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDepoimentosComponent } from './home-depoimentos.component';

describe('HomeDepoimentosComponent', () => {
  let component: HomeDepoimentosComponent;
  let fixture: ComponentFixture<HomeDepoimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDepoimentosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDepoimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
