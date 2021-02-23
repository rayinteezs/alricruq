import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListManagersPage } from './list-managers.page';

describe('ListManagersPage', () => {
  let component: ListManagersPage;
  let fixture: ComponentFixture<ListManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
