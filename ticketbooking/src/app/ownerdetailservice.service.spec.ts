import { TestBed } from '@angular/core/testing';

import { OwnerdetailserviceService } from './ownerdetailservice.service';

describe('OwnerdetailserviceService', () => {
  let service: OwnerdetailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerdetailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
