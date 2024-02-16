import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaLinkComponent } from './criar-conta-link.component';

describe('CriarContaLinkComponent', () => {
  let component: CriarContaLinkComponent;
  let fixture: ComponentFixture<CriarContaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarContaLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriarContaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
