import { TestBed } from '@angular/core/testing';

import { PeriodService } from './period.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PeriodRequest } from '../model/PeriodRequest';
import { PERIODS } from 'src/mocks/responses/periods-data';
import { BODY_PERIODS } from 'src/mocks/requests/body-data';
import { BODY_NO_DATA } from 'src/mocks/requests/body-no-data';
import { NO_DATA } from 'src/mocks/responses/no-data';
import { BODY_INVALID_DATE } from 'src/mocks/requests/body-invalid-date-data';
import { INVALID_DATE } from 'src/mocks/responses/invalid-date';

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

  it('return no periods', () => {
    let body: PeriodRequest = BODY_NO_DATA;

    service.getPeriods(body).subscribe((periods) => {
      expect(periods).toBeTruthy();
      expect(periods.status).toBe('OK')
      expect(periods.periodosIdeias?.length).toBe(0)
    })

    const req = httpTestingController.expectOne(service.apiPeriods);

    expect(req.request.method).toBe('POST');
    req.flush(NO_DATA);

  });

  it('invalid body dates when return the periods', () => {
    let body: PeriodRequest = BODY_INVALID_DATE;

    service.getPeriods(body).subscribe((periods) => {
      expect(periods).toBeTruthy();
      expect(periods.status).toBe('error')
      expect(periods.mensagem).toBe('Data inicio deve ser antes da data fim')
    })

    const req = httpTestingController.expectOne(service.apiPeriods);

    expect(req.request.method).toBe('POST');
    req.flush(INVALID_DATE);

  });

  afterEach(() => {
    httpTestingController.verify();
  });


});
