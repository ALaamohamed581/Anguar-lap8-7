import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { aut3Guard } from './aut3.guard';

describe('aut3Guard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aut3Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
