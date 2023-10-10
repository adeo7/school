import { TestBed } from '@angular/core/testing';

import { ProfesoresServicesService } from './profesores-services.service';

describe('ProfesoresServicesService', () => {
  let service: ProfesoresServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesoresServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
