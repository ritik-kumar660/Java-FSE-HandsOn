import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap, retry, switchMap } from 'rxjs/operators';
import { Course, Student } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Local fallback array when API is offline
  private fallbackCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: false },
    { id: 2, name: 'Database Management Systems', code: 'CS102', credits: 3, gradeStatus: 'passed', enrolled: true },
    { id: 3, name: 'Web Application Architecture', code: 'CS201', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 4, name: 'Software Engineering Principles', code: 'CS202', credits: 3, gradeStatus: 'pending', enrolled: false },
    { id: 5, name: 'Cloud Computing & DevOps', code: 'CS301', credits: 1, gradeStatus: 'failed', enrolled: false },
  ];

  constructor(private http: HttpClient) {}

  /**
   * Task 79, 83, 84, 85, 86: Fetch Courses with RxJS Operators Pipeline
   * Operator Explanations:
   * - retry(2): Retries failed HTTP requests up to 2 times before propagating error.
   * - tap(): Designed for pure side effects (logging, analytics) without altering data stream. Preferred over map for logging because map is for data transformation.
   * - map(): Transforms emitted array items (e.g. filtering out courses with 0 credits).
   * - catchError(): Handles HTTP errors gracefully and returns user-friendly error message.
   */
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      tap((courses) => console.log('Courses loaded:', courses.length)),
      map((courses) => courses.filter((c) => c.credits > 0)),
      catchError((err) => {
        console.error('HTTP Error in CourseService:', err);
        // Return local fallback courses so UI functions seamlessly if json-server is not running
        return of(this.fallbackCourses);
      })
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        const found = this.fallbackCourses.find((c) => c.id === id);
        return of(found);
      })
    );
  }

  // Task 81: POST method createCourse
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  // Task 82: PUT method updateCourse
  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${course.id}`, course);
  }

  // Task 82: DELETE method deleteCourse
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * Task 87: switchMap demonstration for dependent HTTP calls
   * SwitchMap Explanation:
   * switchMap unsubscribes/cancels the previous inner Observable whenever a new outer emission arrives.
   * This is ideal for search/type-ahead and selection changes, preventing race conditions or out-of-order responses.
   */
  getStudentsForSelectedCourse(courseId$: Observable<number>): Observable<Student[]> {
    return courseId$.pipe(
      switchMap((id) =>
        this.http.get<Student[]>(`http://localhost:3000/students?enrolledCourseIds_like=${id}`).pipe(
          catchError(() => of([]))
        )
      )
    );
  }
}
