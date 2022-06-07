import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacePersonnageComponent } from './race-personnage.component';

describe('RacePersonnageComponent', () => {
  let component: RacePersonnageComponent;
  let fixture: ComponentFixture<RacePersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacePersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RacePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
