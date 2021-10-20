import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinfoniaMotoresComponent } from './sinfonia-motores.component';

describe('SinfoniaMotoresComponent', () => {
  let component: SinfoniaMotoresComponent;
  let fixture: ComponentFixture<SinfoniaMotoresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SinfoniaMotoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinfoniaMotoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
