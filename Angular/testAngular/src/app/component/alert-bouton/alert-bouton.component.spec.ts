import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBoutonComponent } from './alert-bouton.component';

describe('AlertBoutonComponent', () => {
  let component: AlertBoutonComponent;
  let fixture: ComponentFixture<AlertBoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertBoutonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
