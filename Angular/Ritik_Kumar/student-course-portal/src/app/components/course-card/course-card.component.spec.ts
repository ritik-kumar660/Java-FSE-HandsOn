import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';
import { vi } from 'vitest';

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;
  let store: MockStore;

  const mockCourse: Course = {
    id: 1,
    name: 'Data Structures & Algorithms',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed',
    enrolled: false,
  };

  const initialState = {
    course: { courses: [mockCourse], loading: false, error: null },
    enrollment: { enrolledCourseIds: [] },
  };

  beforeEach(async () => {
    // Task 101, 109: Configure TestBed with provideMockStore
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.course = mockCourse;
    fixture.detectChanges();
  });

  // Task 102: Verify component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Task 103: Test @Input rendering in DOM
  it('should display the course name and code correctly in the DOM', () => {
    const nameEl = fixture.debugElement.query(By.css('.course-name')).nativeElement;
    const codeEl = fixture.debugElement.query(By.css('.course-code')).nativeElement;
    expect(nameEl.textContent).toContain('Data Structures & Algorithms');
    expect(codeEl.textContent).toContain('CS101');
  });

  // Task 104: Test @Output event emission on button click
  it('should emit enrollRequested when Enroll button is clicked', () => {
    const emitSpy = vi.spyOn(component.enrollRequested, 'emit');
    const buttonEl = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    buttonEl.click();
    fixture.detectChanges();
    expect(emitSpy).toHaveBeenCalledWith(1);
  });

  // Task 105: Test ngOnChanges lifecycle hook
  it('should trigger console.log when ngOnChanges is called', () => {
    const logSpy = vi.spyOn(console, 'log');
    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true),
    });
    expect(logSpy).toHaveBeenCalled();
  });
});
