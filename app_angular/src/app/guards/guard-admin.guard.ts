import { CanActivateFn } from '@angular/router';

export const guardAdminGuard: CanActivateFn = (route, state) => {
  return true;
};
