import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-summary-widget',
  imports: [CommonModule],
  templateUrl: './course-summary-widget.component.html',
  styleUrl: './course-summary-widget.component.css',
})
export class CourseSummaryWidgetComponent {
  courses$: Observable<Course[]>;

  constructor(private courseService: CourseService) {
    this.courses$ = this.courseService.getCourses();
  }
}
