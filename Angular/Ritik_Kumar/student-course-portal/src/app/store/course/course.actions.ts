import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course.model';

/**
 * Task 93: NgRx Course Actions
 * Action type strings prefixed with [Course] for Redux DevTools readability.
 */
export const loadCourses = createAction('[Course] Load Courses');

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);
