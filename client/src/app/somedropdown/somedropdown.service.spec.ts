import { TestBed } from '@angular/core/testing';

import { SomedropdownService } from './somedropdown.service';

describe('SomedropdownService', () => {
  let service: SomedropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomedropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
