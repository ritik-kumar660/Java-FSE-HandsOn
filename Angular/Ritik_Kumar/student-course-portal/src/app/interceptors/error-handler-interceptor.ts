import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Task 90: ErrorHandlerInterceptor
 * Intercepts HTTP errors globally.
 */
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.warn('Unauthorized access detected - redirecting to home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error (500) occurred:', error.message);
      }
      return throwError(() => error);
    })
  );
};
