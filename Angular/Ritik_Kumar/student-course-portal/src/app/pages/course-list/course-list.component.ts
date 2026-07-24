import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCardComponent, HighlightDirective],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  selectedCourseId: number | null = null;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  onEnroll(courseId: number): void {
    this.selectedCourseId = courseId;
    this.store.dispatch(enrollInCourse({ courseId }));
  }

  onUnenroll(courseId: number): void {
    this.store.dispatch(unenrollFromCourse({ courseId }));
    if (this.selectedCourseId === courseId) {
      this.selectedCourseId = null;
    }
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
