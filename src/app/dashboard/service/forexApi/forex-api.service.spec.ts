import { TestBed } from '@angular/core/testing';

import { ForexApiService } from './forex-api.service';

describe('ForexApiService', () => {
  let service: ForexApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
