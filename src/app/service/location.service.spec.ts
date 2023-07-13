import { LocationService } from "./location.service"
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { STATES_DATA } from "src/mocks/responses/states";

describe('LocationService', () => {

  let service: LocationService, httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LocationService
      ]
    })
    service = TestBed.inject(LocationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('return the states', () => {

    service.getStates().subscribe(res => {
      expect(res).toBeTruthy();
      expect(res.length).toBe(27);
    });

    const req = httpTestingController.expectOne(service.apiStates);

    expect(req.request.method).toBe('GET');
    req.flush(STATES_DATA);

  });


afterEach(() => {
  httpTestingController.verify();
});

})
