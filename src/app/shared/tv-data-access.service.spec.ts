import { TestBed, inject } from '@angular/core/testing';

import { TvDataAccessService } from './tv-data-access.service';

describe('TvDataAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvDataAccessService]
    });
  });

  it('should be created', inject([TvDataAccessService], (service: TvDataAccessService) => {
    expect(service).toBeTruthy();
  }));
});
