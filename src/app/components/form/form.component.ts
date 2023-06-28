import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { State } from 'src/app/model/State';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  states: State[] = [];
  optionEmpty: State = {
      id: "",
      sigla: "",
      nome: " - "
  };

  selectedState = this.optionEmpty.sigla;

  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });

  constructor(
    private locationService: LocationService,
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
    ) { }

  ngOnInit(): void {
    this.setFormatLanguage();
    this.locationService.getStates().subscribe((res) => {
      this.states = res;
      this.states.unshift(this.optionEmpty);
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
    console.log("listou")
  }

}
