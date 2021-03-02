import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListBoatsPage } from './list-boats.page';

describe('ListBoatsPage', () => {
  let component: ListBoatsPage;
  let fixture: ComponentFixture<ListBoatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBoatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListBoatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
