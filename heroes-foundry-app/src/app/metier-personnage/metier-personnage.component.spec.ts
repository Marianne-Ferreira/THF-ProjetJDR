import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierPersonnageComponent } from './metier-personnage.component';

describe('MetierPersonnageComponent', () => {
  let component: MetierPersonnageComponent;
  let fixture: ComponentFixture<MetierPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetierPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetierPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
