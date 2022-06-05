import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPersonnageComponent } from './display-personnage.component';

describe('DisplayPersonnageComponent', () => {
  let component: DisplayPersonnageComponent;
  let fixture: ComponentFixture<DisplayPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
