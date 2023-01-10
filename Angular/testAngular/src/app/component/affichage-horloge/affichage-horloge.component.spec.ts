import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageHorlogeComponent } from './affichage-horloge.component';

describe('AffichageHorlogeComponent', () => {
  let component: AffichageHorlogeComponent;
  let fixture: ComponentFixture<AffichageHorlogeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageHorlogeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageHorlogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
