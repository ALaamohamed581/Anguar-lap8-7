import { TestBed } from '@angular/core/testing';

import { StaticPorductService } from './static-porduct.service';

describe('StaticPorductService', () => {
  let service: StaticPorductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticPorductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
