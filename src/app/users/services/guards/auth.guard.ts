import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoged = authService.getActiveUser();

  if(!isLoged) router.navigate(["/landing"]);

  return true;
};
