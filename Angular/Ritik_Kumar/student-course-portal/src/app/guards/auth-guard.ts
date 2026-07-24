import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

/**
 * Task 75: AuthGuard implementation
 * Checks if user is authenticated via AuthService. If authenticated returns true,
 * otherwise redirects to root route '/' and returns false.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  }

  router.navigate(['/']);
  return false;
};
