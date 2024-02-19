import { TestBed } from '@angular/core/testing';

import { BannerToggleService } from './banner-toggle.service';

describe('BannerToggleService', () => {
  let service: BannerToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
