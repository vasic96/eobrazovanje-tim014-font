import { TestBed, inject } from '@angular/core/testing';

import { UplataService } from './uplata.service';

describe('UplataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UplataService]
    });
  });

  it('should be created', inject([UplataService], (service: UplataService) => {
    expect(service).toBeTruthy();
  }));
});
