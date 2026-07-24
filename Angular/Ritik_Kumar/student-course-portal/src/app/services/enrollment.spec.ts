import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { EnrollmentService } from './enrollment';
import { CourseService } from './course';

describe('EnrollmentService', () => {
  let service: EnrollmentService;

  beforeEach(() => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [EnrollmentService, CourseService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(EnrollmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should enroll and unenroll courses', () => {
    service.enroll(5);
    expect(service.isEnrolled(5)).toBe(true);
    service.unenroll(5);
    expect(service.isEnrolled(5)).toBe(false);
  });
});
