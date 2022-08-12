import { TestBed } from '@angular/core/testing';

import { PriceDetailsService } from './price-details.service';

describe('PriceDetailsService', () => {
  let service: PriceDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
