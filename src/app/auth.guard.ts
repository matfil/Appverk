import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    return false;
  }
  return true;
};
export const loginGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    return true;
  }
  return false;
};