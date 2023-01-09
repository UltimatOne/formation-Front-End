import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesDeVisitesComponent } from './cartes-de-visites.component';

describe('CartesDeVisitesComponent', () => {
  let component: CartesDeVisitesComponent;
  let fixture: ComponentFixture<CartesDeVisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartesDeVisitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartesDeVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
