import { TestBed } from '@angular/core/testing';

import { GitsService } from './gits.service';

describe('GitsService', () => {
  let service: GitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
