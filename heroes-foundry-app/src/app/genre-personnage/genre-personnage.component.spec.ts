import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePersonnageComponent } from './genre-personnage.component';

describe('GenrePersonnageComponent', () => {
  let component: GenrePersonnageComponent;
  let fixture: ComponentFixture<GenrePersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenrePersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
