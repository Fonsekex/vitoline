import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonaDetalleUnoPage } from './persona-detalle-uno.page';

describe('PersonaDetalleUnoPage', () => {
  let component: PersonaDetalleUnoPage;
  let fixture: ComponentFixture<PersonaDetalleUnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaDetalleUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaDetalleUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
