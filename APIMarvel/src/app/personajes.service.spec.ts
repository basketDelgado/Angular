/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonajesService } from './personajes.service';

describe('PersonajesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonajesService]
    });
  });

  it('should ...', inject([PersonajesService], (service: PersonajesService) => {
    expect(service).toBeTruthy();
  }));
});
