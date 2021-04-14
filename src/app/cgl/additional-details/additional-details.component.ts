import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.sass']
})
export class AdditionalDetailsComponent implements OnInit {

  additionalDetailsForm:FormGroup;

  constructor(private router: Router,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.additionalDetailsForm = this.formBuilder.group({
      accountNumber:[''],
      landlineNumber:[''],
      panNumber:[''],
      annualIncome:['']
    });
  }

  route(){
    this.router.navigate(['uploaddocuments']);
  }

  isNumberKey(evt: any) {
    if (
      (evt.key >= "0" && evt.key <= "9") ||
      evt.key == "Backspace" ||
      evt.key == "Delete" ||
      evt.key == "ArrowLeft" ||
      evt.key == "ArrowRight"
    ) {
      return true;
    }
    return false;
  }

  routeBack(){
    this.router.navigate(['converttoproposal']);
  }

}
