import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { NotificationComponent } from '../../components/notification/notification.component';

@Component({
  selector: 'app-student-profile',
  imports: [CommonModule, NotificationComponent],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css',
})
export class StudentProfileComponent {
  student = {
    name: 'Ritik Kumar',
    studentId: 'STU-2026-904',
    email: 'ritik.kumar@university.edu',
    major: 'Computer Science & Engineering',
  };

  enrolledCourses$: Observable<Course[]>;

  constructor(private store: Store) {
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
