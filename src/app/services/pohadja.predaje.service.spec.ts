import { TestBed, inject } from '@angular/core/testing';

import { Pohadja.PredajeService } from './pohadja.predaje.service';

describe('Pohadja.PredajeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Pohadja.PredajeService]
    });
  });

  it('should be created', inject([Pohadja.PredajeService], (service: Pohadja.PredajeService) => {
    expect(service).toBeTruthy();
  }));
});
