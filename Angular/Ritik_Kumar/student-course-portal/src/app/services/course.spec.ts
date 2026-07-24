import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CourseService } from './course';
import { Course } from '../models/course.model';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  const mockCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: false },
    { id: 2, name: 'Database Systems', code: 'CS102', credits: 3, gradeStatus: 'passed', enrolled: true },
  ];

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch courses from GET http://localhost:3000/courses', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should handle 500 error gracefully and return fallback courses after retries', () => {
    service.getCourses().subscribe((courses) => {
      expect(courses).toBeTruthy();
      expect(courses.length).toBeGreaterThan(0);
    });

    // Flush initial request + 2 retries (retry(2) operator)
    const req1 = httpMock.expectOne('http://localhost:3000/courses');
    req1.flush('500 Error', { status: 500, statusText: 'Internal Server Error' });

    const req2 = httpMock.expectOne('http://localhost:3000/courses');
    req2.flush('500 Error', { status: 500, statusText: 'Internal Server Error' });

    const req3 = httpMock.expectOne('http://localhost:3000/courses');
    req3.flush('500 Error', { status: 500, statusText: 'Internal Server Error' });
  });
});
