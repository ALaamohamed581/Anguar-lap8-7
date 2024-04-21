import { CanActivateFn } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
export const auth2Guard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    return inject(Router).navigateByUrl('/login');
  }
  return true;
};
