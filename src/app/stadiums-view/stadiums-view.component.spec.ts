import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsViewComponent } from './stadiums-view.component';

describe('StadiumsViewComponent', () => {
  let component: StadiumsViewComponent;
  let fixture: ComponentFixture<StadiumsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
