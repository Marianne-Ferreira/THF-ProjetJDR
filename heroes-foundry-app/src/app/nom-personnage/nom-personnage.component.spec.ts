import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomPersonnageComponent } from './nom-personnage.component';

describe('NomPersonnageComponent', () => {
  let component: NomPersonnageComponent;
  let fixture: ComponentFixture<NomPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
