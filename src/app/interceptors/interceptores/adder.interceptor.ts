import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EcommerceService } from '../Services/ecommerce.service';

export const adderInterceptor: HttpInterceptorFn = (req, next) => {
  let reqauth = req.clone({
    headers: req.headers.set(
      'Authorization',
      `${localStorage.getItem('token')}`
    ),
  });
  return next(reqauth);
};
