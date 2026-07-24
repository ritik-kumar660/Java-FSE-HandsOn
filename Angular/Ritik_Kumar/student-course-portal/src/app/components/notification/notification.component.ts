import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification';

/**
 * Component-Level Providers Explanation:
 * Providing NotificationService in the @Component decorator's `providers` array creates a dedicated,
 * isolated instance of NotificationService tied to this component's lifecycle and DOM tree branch.
 * Unlike root singletons (providedIn: 'root'), multiple instances of NotificationComponent will each
 * instantiate their own separate NotificationService, preventing state leak between component instances.
 */
@Component({
  selector: 'app-notification',
  imports: [CommonModule],
  providers: [NotificationService],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {
    this.notificationService.addNotification('Notification Widget Initialized (Scoped Instance)');
  }
}
