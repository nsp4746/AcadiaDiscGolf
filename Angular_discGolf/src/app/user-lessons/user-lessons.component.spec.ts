import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLessonsComponent } from './user-lessons.component';

describe('UserLessonsComponent', () => {
  let component: UserLessonsComponent;
  let fixture: ComponentFixture<UserLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLessonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
