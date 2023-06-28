import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodRequest } from '../model/PeriodRequest';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private http: HttpClient) { }

  apiPeriods: string = "https://localhost:3000/feriados";

  getPeriods(body: PeriodRequest): Observable<any> {
    return this.http.post<any>(this.apiPeriods, body);
  }
}
