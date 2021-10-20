import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorizonteProductivoComponent } from './horizonte-productivo.component';

describe('HorizonteProductivoComponent', () => {
  let component: HorizonteProductivoComponent;
  let fixture: ComponentFixture<HorizonteProductivoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizonteProductivoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorizonteProductivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
