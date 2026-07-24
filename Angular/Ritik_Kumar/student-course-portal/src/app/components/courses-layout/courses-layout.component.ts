import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseSummaryWidgetComponent } from '../course-summary-widget/course-summary-widget.component';

@Component({
  selector: 'app-courses-layout',
  imports: [RouterOutlet, CourseSummaryWidgetComponent],
  templateUrl: './courses-layout.component.html',
  styleUrl: './courses-layout.component.css',
})
export class CoursesLayoutComponent {}
