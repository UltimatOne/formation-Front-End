import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivListCoursesComponent } from './reactiv-list-courses.component';

describe('ReactivListCoursesComponent', () => {
  let component: ReactivListCoursesComponent;
  let fixture: ComponentFixture<ReactivListCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivListCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
