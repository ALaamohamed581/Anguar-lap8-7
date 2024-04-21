import { CanDeactivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { ApiProductsService } from '../../service/api-products.service';
import { HttpClient } from '@angular/common/http';
export const aut3Guard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let x: any;
  let y!: HttpClient;
  x = new ApiProductsService(y).state.next(true);
  console.log(x + 'this is x');
  return x;
};
