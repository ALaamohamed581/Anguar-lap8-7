import { TestBed } from '@angular/core/testing';

import { UserAutenticationServiceService } from './user-autentication-service.service';

describe('UserAutenticationServiceService', () => {
  let service: UserAutenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAutenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
