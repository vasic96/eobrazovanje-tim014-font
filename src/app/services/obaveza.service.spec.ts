import { TestBed, inject } from '@angular/core/testing';

import { ObavezaService } from './obaveza.service';

describe('ObavezaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObavezaService]
    });
  });

  it('should be created', inject([ObavezaService], (service: ObavezaService) => {
    expect(service).toBeTruthy();
  }));
});
