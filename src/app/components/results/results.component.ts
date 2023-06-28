import { Component, OnInit } from '@angular/core';
import { PeriodService } from 'src/app/service/period.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  response: any;

  constructor(private service: PeriodService) { }

  ngOnInit(): void {
    this.service.currentData.subscribe(response => this.response = response)
  }

}
