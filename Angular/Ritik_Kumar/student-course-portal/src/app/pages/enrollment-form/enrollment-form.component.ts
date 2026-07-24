import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

export interface EnrollmentFormData {
  studentName: string;
  studentEmail: string;
  courseId: number | null;
  preferredSemester: string;
  agreeToTerms: boolean;
}

@Component({
  selector: 'app-enrollment-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css',
})
export class EnrollmentFormComponent {
  formData: EnrollmentFormData = {
    studentName: '',
    studentEmail: '',
    courseId: null,
    preferredSemester: 'Odd',
    agreeToTerms: false,
  };

  isSubmitted: boolean = false;

  onSubmit(form: NgForm): void {
    console.log('Form Value:', form.value);
    console.log('Form Validity:', form.valid);
    if (form.valid) {
      this.isSubmitted = true;
    }
  }

  onReset(form: NgForm): void {
    form.resetForm({
      preferredSemester: 'Odd',
      agreeToTerms: false,
    });
    this.isSubmitted = false;
  }
}
