import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapPersonnageComponent } from './recap-personnage.component';

describe('RecapPersonnageComponent', () => {
  let component: RecapPersonnageComponent;
  let fixture: ComponentFixture<RecapPersonnageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapPersonnageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecapPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
