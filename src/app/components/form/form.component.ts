import { Component, OnInit } from '@angular/core';
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
  }

  selectedState = this.optionEmpty.sigla

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
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

}
