import { CanDeactivateFn } from '@angular/router';
import { ReactiveEnrollmentFormComponent } from '../pages/reactive-enrollment-form/reactive-enrollment-form.component';

/**
 * Task 77: CanDeactivate guard for form safety
 * Prompts user with browser confirmation dialog if reactive form is dirty before navigation.
 */
export const unsavedChangesGuard: CanDeactivateFn<ReactiveEnrollmentFormComponent> = (
  component
) => {
  if (component.enrollForm?.dirty && !component.isSubmitted) {
    return window.confirm('You have unsaved changes. Are you sure you want to leave?');
  }
  return true;
};
