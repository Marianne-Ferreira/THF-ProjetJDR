import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracPersonnageComponent } from './carac-personnage.component';

describe('CaracPersonnageComponent', () => {
  let component: CaracPersonnageComponent;
  let fixture: ComponentFixture<CaracPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
