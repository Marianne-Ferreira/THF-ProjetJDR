import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencePersonnageComponent } from './competence-personnage.component';

describe('CompetencePersonnageComponent', () => {
  let component: CompetencePersonnageComponent;
  let fixture: ComponentFixture<CompetencePersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetencePersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
