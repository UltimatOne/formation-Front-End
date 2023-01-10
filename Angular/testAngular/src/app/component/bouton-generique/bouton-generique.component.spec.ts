import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonGeneriqueComponent } from './bouton-generique.component';

describe('BoutonGeneriqueComponent', () => {
  let component: BoutonGeneriqueComponent;
  let fixture: ComponentFixture<BoutonGeneriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonGeneriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonGeneriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
