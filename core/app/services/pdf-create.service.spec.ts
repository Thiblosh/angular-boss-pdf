import { TestBed } from '@angular/core/testing';

import { PdfCreateService } from './pdf-create.service';

describe('PdfCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfCreateService = TestBed.get(PdfCreateService);
    expect(service).toBeTruthy();
  });
});
