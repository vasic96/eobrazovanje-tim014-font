import { TestBed, inject } from '@angular/core/testing';

import { DokumentService } from './dokument.service';

describe('DokumentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DokumentService]
    });
  });

  it('should be created', inject([DokumentService], (service: DokumentService) => {
    expect(service).toBeTruthy();
  }));
});
