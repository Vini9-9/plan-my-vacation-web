import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { LocationService } from 'src/app/service/location.service';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { PeriodService } from 'src/app/service/period.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { setupSortedStates } from 'src/mocks/setupData/statesSorted';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

fdescribe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FormComponent ],
      providers: [
        LocationService,
        DateAdapter,
        { provide: MAT_DATE_LOCALE, useValue: 'pt'},
        PeriodService
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FormComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display states list', () => {
    component.states = setupSortedStates();

    fixture.detectChanges();

    const statesOption = el.queryAll(By.css('.states-option'));

    expect(statesOption).toBeTruthy("Could not find states options");
    expect(statesOption.length).toBe(27, "Unexpected number of states options");
  });

  // it('should formatDateToBody less than ten', () => {
  //   const date = new Date(2023, 8, 9);
  //   const formattedDate = component.formatDateToBody(date);
  //   expect(formattedDate).toEqual('2023-09-09');
  // });

  // it('should formatDateToBody greater than ten', () => {
  //   const date = new Date(2023, 9, 14);
  //   const formattedDate = component.formatDateToBody(date);
  //   expect(formattedDate).toEqual('2023-10-14');
  // });


});
