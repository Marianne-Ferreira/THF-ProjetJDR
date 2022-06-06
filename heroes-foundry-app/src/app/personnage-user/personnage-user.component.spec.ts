import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageUserComponent } from './personnage-user.component';

describe('PersonnageUserComponent', () => {
  let component: PersonnageUserComponent;
  let fixture: ComponentFixture<PersonnageUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnageUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnageUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
