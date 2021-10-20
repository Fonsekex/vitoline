import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HinchaAmarilloComponent } from './hincha-amarillo.component';

describe('HinchaAmarilloComponent', () => {
  let component: HinchaAmarilloComponent;
  let fixture: ComponentFixture<HinchaAmarilloComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HinchaAmarilloComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HinchaAmarilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
