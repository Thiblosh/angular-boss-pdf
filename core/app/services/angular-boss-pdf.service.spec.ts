/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AngularBossPdfService } from './angular-boss-pdf.service';

describe('Service: AngularBossPdf', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularBossPdfService]
    });
  });

  it('should ...', inject([AngularBossPdfService], (service: AngularBossPdfService) => {
    expect(service).toBeTruthy();
  }));
});
