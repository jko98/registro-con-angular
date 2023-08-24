import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRegistroComponent } from './componente-registro.component';

describe('ComponenteRegistroComponent', () => {
  let component: ComponenteRegistroComponent;
  let fixture: ComponentFixture<ComponenteRegistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteRegistroComponent]
    });
    fixture = TestBed.createComponent(ComponenteRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
