import { TestBed } from '@angular/core/testing';

import { DropdownItemsService } from './dropdown-items.service';

describe('DropdownItemsService', () => {
  let service: DropdownItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
