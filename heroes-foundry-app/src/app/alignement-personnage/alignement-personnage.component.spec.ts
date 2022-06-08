import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignementPersonnageComponent } from './alignement-personnage.component';

describe('AlignementPersonnageComponent', () => {
  let component: AlignementPersonnageComponent;
  let fixture: ComponentFixture<AlignementPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlignementPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignementPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
