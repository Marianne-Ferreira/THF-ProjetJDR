import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuffPersonnageComponent } from './stuff-personnage.component';

describe('StuffPersonnageComponent', () => {
  let component: StuffPersonnageComponent;
  let fixture: ComponentFixture<StuffPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuffPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuffPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
