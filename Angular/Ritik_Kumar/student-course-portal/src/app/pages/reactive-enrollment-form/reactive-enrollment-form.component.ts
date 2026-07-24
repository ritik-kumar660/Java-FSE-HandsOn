import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

/**
 * Task 53: Custom Synchronous Validator Function
 * Disallows course codes / IDs starting with prefix 'XX'.
 */
export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value || '');
  if (value.startsWith('XX') || value.startsWith('xx')) {
    return { noCourseCode: true };
  }
  return null;
}

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css',
})
export class ReactiveEnrollmentFormComponent implements OnInit {
  enrollForm!: FormGroup;
  isSubmitted: boolean = false;
  isCheckingEmail: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Task 49, 53, 55, 56: Build reactive form structure
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck.bind(this)],
      ],
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  /**
   * Task 57: Typed Getter for FormArray
   * Getter Explanation:
   * Defining a typed getter in TypeScript avoids cumbersome inline casting in HTML templates
   * like `(enrollForm.get('additionalCourses') as FormArray).controls`.
   * It provides compile-time type safety, cleaner template syntax, and proper IntelliSense support.
   */
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Task 56: Add dynamic course control
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Task 56: Remove dynamic course control
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  /**
   * Task 55: Custom Async Validator Function
   * Simulates asynchronous email availability verification against a backend server.
   */
  simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      this.isCheckingEmail = true;
      setTimeout(() => {
        this.isCheckingEmail = false;
        const email = String(control.value || '').toLowerCase();
        if (email.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  /**
   * Task 51, 52: Form Submission
   * Comment on difference between enrollForm.value and enrollForm.getRawValue():
   * enrollForm.value excludes any disabled FormControls in the form model hierarchy.
   * enrollForm.getRawValue() returns all control values regardless of their disabled status.
   */
  onSubmit(): void {
    console.log('Form Value (excludes disabled):', this.enrollForm.value);
    console.log('Form Raw Value (includes all):', this.enrollForm.getRawValue());
    if (this.enrollForm.valid) {
      this.isSubmitted = true;
    }
  }

  onReset(): void {
    this.enrollForm.reset({
      studentName: '',
      studentEmail: '',
      courseId: '',
      preferredSemester: 'Odd',
      agreeToTerms: false,
    });
    this.additionalCourses.clear();
    this.isSubmitted = false;
  }
}
