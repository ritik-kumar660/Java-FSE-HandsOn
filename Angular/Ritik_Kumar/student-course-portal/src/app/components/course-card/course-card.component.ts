import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { Course } from '../../models/course.model';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;

  @Output() enrollRequested = new EventEmitter<number>();
  @Output() unenrollRequested = new EventEmitter<number>();

  isExpanded: boolean = false;
  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('Course input changed:', {
        previousValue: changes['course'].previousValue,
        currentValue: changes['course'].currentValue,
      });
    }
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses(): Record<string, boolean> {
    return {
      'card--full': (this.course?.credits ?? 0) >= 4,
      expanded: this.isExpanded,
    };
  }

  get borderStyle(): Record<string, string> {
    const status = this.course?.gradeStatus;
    let color = '#64748b';
    if (status === 'passed') color = '#10b981';
    else if (status === 'failed') color = '#ef4444';
    return { 'border-left': `6px solid ${color}` };
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}
