import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list.component';
import { Course } from '../../models/course.model';

describe('CourseListComponent (NgRx Connected)', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let store: MockStore;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: false },
    { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 3, gradeStatus: 'passed', enrolled: true },
  ];

  const initialState = {
    course: { courses: mockCourses, loading: false, error: null },
    enrollment: { enrolledCourseIds: [2] },
  };

  beforeEach(async () => {
    // Task 109: Configure TestBed with provideMockStore
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create CourseListComponent', () => {
    expect(component).toBeTruthy();
  });

  // Task 109: Assert rendered course cards match initial store state
  it('should render course cards corresponding to store initial state', () => {
    const cardEls = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cardEls.length).toBe(2);
  });

  // Task 110: Test loading indicator visibility using store.setState
  it('should display loading spinner when store loading state is true', () => {
    store.setState({
      course: { courses: [], loading: true, error: null },
      enrollment: { enrolledCourseIds: [] },
    });

    fixture.detectChanges();

    const loadingEl = fixture.debugElement.query(By.css('.loading-box'));
    expect(loadingEl).toBeTruthy();
  });
});
