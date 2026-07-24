import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Task 88: AuthInterceptor
 * Intercepts outgoing HTTP requests, clones the request object, and attaches an Authorization header.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345',
    },
  });
  return next(authReq);
};
