import { TestBed } from '@angular/core/testing';

import { PartyAccountService } from './party-account.service';

describe('PartyAccountService', () => {
  let service: PartyAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
