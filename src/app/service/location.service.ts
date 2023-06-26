import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  apiStates: string = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/";

  getStates(): Observable<any> {
    return this.http.get<any>(this.apiStates);
  }

}
