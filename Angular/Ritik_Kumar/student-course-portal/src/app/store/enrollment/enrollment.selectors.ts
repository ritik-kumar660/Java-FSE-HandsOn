import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';
import { Course } from '../../models/course.model';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');

export const selectEnrolledIds = createSelector(
  selectEnrollmentState,
  (state: EnrollmentState) => state?.enrolledCourseIds || []
);

/**
 * Task 99: Cross-Slice Selector
 * Cross-Slice Selector Explanation:
 * Combines two independent state slices ('course' and 'enrollment') using multiple input selectors
 * to compute joined data (full enrolled Course objects) without duplicating state in the store.
 */
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses: Course[], enrolledIds: number[]): Course[] => {
    return courses.filter((course) => enrolledIds.includes(course.id));
  }
);
