import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CourseService } from './course';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class EnrollmentService {
  private enrolledCourseIds: number[] = [2];

  constructor(private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter((id) => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.courseService.getCourses().pipe(
      map((courses: Course[]) => courses.filter((course: Course) => this.enrolledCourseIds.includes(course.id)))
    );
  }
}
