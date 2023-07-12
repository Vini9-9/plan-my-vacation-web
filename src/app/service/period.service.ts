import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PeriodRequest } from '../model/PeriodRequest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {


  private dataSource = new BehaviorSubject(false);
  currentData = this.dataSource.asObservable();

  private sharedData: any;

  constructor(private http: HttpClient) { }

  apiPeriods: string = environment.apiFeriado;

  getPeriods(body: PeriodRequest): Observable<any> {
    return this.http.post<any>(this.apiPeriods, body);
  }

  setData(data: any): void {
    this.dataSource.next(data)
  }

  getData(): any {
    return this.sharedData;
  }
}
