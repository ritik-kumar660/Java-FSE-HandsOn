import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { authGuard } from './auth-guard';
import { AuthService } from '../services/auth';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true when user is logged in', () => {
    authService.isLoggedIn = true;
    const result = executeGuard({} as ActivatedRouteSnapshot, {} as RouterStateSnapshot);
    expect(result).toBe(true);
  });
});
