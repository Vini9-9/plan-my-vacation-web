import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { State } from 'src/app/model/State';
import { LocationService } from 'src/app/service/location.service';
import { PeriodService } from 'src/app/service/period.service';
import { PeriodRequest } from '../../model/PeriodRequest';
import * as moment from 'moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  qtdDias: number = 5;
  states: State[] = [];

  selectedState = "";

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  body: PeriodRequest = {
    dataInicio: '',
    dataFim: '',
    estado: '',
    cidade: '',
    qtdDias: ''
  }

  constructor(
    private locationService: LocationService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    private service: PeriodService
    ) { }

  ngOnInit(): void {
    this.setFormatLanguage();
    this.locationService.getStates().subscribe((res: State[]) => {
      this.states = Object.values(res).sort((a: State, b: State) => a.sigla.localeCompare(b.sigla));
    }, (error) => {
      console.log('Error fetching states:', error);
    })
  }

  selectState(event: Event) {
    this.selectedState = (event.target as HTMLSelectElement).value;
  }

  setFormatLanguage(locale: string = 'pt'){
    this._locale = locale;
    this._adapter.setLocale(this._locale);
  }

  getDateFormatString(): string {
    if (this._locale != 'pt') {
      return 'MM/DD/YYYY - MM/DD/YYYY';
    }
    return 'DD/MM/YYYY - DD/MM/YYYY';
  }

  sendForm() {
    this.fillBody()
    this.service.getPeriods(this.body).subscribe((res) => {
      this.service.setData(res)
    })
  }

  fillBody(){
    this.body.estado = this.selectedState;
    this.body.qtdDias = this.qtdDias.toString();
    this.body.dataInicio = this.formatDateToBody(this.range.value.start);
    this.body.dataFim = this.formatDateToBody(this.range.value.end);
  }

  formatDateToBody(date: Date): string{
    var dayMoment = moment(date);
    var monthNumber = dayMoment.get('month') + 1;
    return `${dayMoment.get('year')}-${('0' + monthNumber).slice(-2)}-${('0' + dayMoment.get('date')).slice(-2)}`
  }

}
