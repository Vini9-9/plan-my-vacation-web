import { TestBed } from '@angular/core/testing';

import { PeriodService } from './period.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeriodRequest } from '../model/PeriodRequest';
import { PERIODS } from 'src/mocks/periods-data';
import { BODY_PERIODS } from 'src/mocks/body-data';

describe('PeriodService', () => {
  let service: PeriodService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PeriodService,
      ]
    });
    service = TestBed.inject(PeriodService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('return the periods', () => {
    let body: PeriodRequest = BODY_PERIODS;

    service.getPeriods(body).subscribe((periods) => {
      expect(periods).toBeTruthy('No periods returned');
      expect(periods.status).toBe('OK')
      expect(periods.periodosIdeias?.length).toBe(9)
    })

    const req = httpTestingController.expectOne(service.apiPeriods);

    expect(req.request.method).toBe('POST');
    req.flush(PERIODS);


  });

  afterEach(() => {
    httpTestingController.verify();
  });


});
