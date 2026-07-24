import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Data Binding Explanation:
 * [property] (One-way binding): Data flows exclusively from the Component class property to the DOM target property (Component -> DOM).
 * [(ngModel)] (Two-way binding): Data flows synchronously in both directions. Any user interaction in the DOM updates the Component state, and any Component state modification updates the DOM representation (DOM <-> Component).
 */
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  // Task 11: String interpolation property
  portalName: string = 'Student Course Portal';

  // Task 12: Property binding flag
  isPortalActive: boolean = true;

  // Task 13: Event binding handler property & message
  message: string = '';

  // Task 14: Two-way binding property
  searchTerm: string = '';

  // Stats row properties
  availableCoursesCount: number = 12;
  enrolledCount: number = 3;
  gpa: number = 3.8;

  // Task 16: Lifecycle hook ngOnInit
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  // Task 17: Lifecycle hook ngOnDestroy
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Task 13: Event binding handler method
  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }
}
