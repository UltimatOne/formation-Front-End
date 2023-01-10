import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeureComponent } from './heure.component';

describe('HeureComponent', () => {
  let component: HeureComponent;
  let fixture: ComponentFixture<HeureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
