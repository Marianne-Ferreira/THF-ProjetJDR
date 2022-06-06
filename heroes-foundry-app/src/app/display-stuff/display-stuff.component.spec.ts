import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStuffComponent } from './display-stuff.component';

describe('DisplayStuffComponent', () => {
  let component: DisplayStuffComponent;
  let fixture: ComponentFixture<DisplayStuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayStuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
