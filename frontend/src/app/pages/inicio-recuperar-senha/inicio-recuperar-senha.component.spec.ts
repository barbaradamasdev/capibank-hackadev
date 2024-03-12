import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioRecuperarSenhaComponent } from './inicio-recuperar-senha.component';

describe('InicioRecuperarSenhaComponent', () => {
  let component: InicioRecuperarSenhaComponent;
  let fixture: ComponentFixture<InicioRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioRecuperarSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
