import { TestBed } from '@angular/core/testing';

import { GuardchangePasswordService } from './guardchange-password.service';

describe('GuardchangePasswordService', () => {
  let service: GuardchangePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardchangePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
