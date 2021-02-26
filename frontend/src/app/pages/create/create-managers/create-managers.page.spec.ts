import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateManagersPage } from './create-managers.page';

describe('CreateManagersPage', () => {
  let component: CreateManagersPage;
  let fixture: ComponentFixture<CreateManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
