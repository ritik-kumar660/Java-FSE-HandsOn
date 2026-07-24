import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

/**
 * Task 95: Memoized Course Selectors
 * Selectors are memoized, recomputing only when input state slices change.
 */
export const selectCourseState = createFeatureSelector<CourseState>('course');

export const selectAllCourses = createSelector(
  selectCourseState,
  (state: CourseState) => state?.courses || []
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  (state: CourseState) => state?.loading || false
);

export const selectCoursesError = createSelector(
  selectCourseState,
  (state: CourseState) => state?.error || null
);
