import { TestBed } from '@angular/core/testing';

import { NotificationSrcviceService } from './notification-srcvice.service';

describe('NotificationSrcviceService', () => {
  let service: NotificationSrcviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationSrcviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
