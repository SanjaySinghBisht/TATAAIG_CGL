import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventManager } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-convert-to-proposal',
  templateUrl: './convert-to-proposal.component.html',
  styleUrls: ['./convert-to-proposal.component.sass']
})
export class ConvertToProposalComponent implements OnInit,AfterViewInit {

  months : Object = {
    'jan' : '01',
    'feb' : '02',
    'mar' : '03',
    'apr' : '04',
    'may' : '05',
    'jun' : '06',
    'jul' : '07',
    'aug' : '08',
    'sep' : '09',
    'oct' : '10',
    'nov' : '11',
    'dec' : '12'
  };
  @ViewChild("policyInceptionDate") policyInceptionDate :ElementRef;
  @ViewChild("retroactiveDate") retroactiveDate :ElementRef;
  detailsCompleted:Object={
    additionalDetails:true,
    documentUpload: true
  }

  constructor(private router: Router,private eventManager: EventManager) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.preFormatDates(this.policyInceptionDate.nativeElement);
    this.preFormatDates(this.retroactiveDate.nativeElement);
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

  checkValue(str, max) {
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str);
      if (isNaN(num) || num <= 0 || num > max) num = 1;
      str = num > parseInt(max.toString().charAt(0)) 
             && num.toString().length == 1 ? '0' + num : num.toString();
    };
    return str;
  }

  preFormatDates(htmlElement){
    this.eventManager.addEventListener(htmlElement,'keydown',(e)=>{
      var input = htmlElement.value;
      if(/[\-]/.test(input)) return;
      var key = e.keyCode || e.charCode;

      if (key == 8 || key == 46) 
        return false;
        
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 1);
      var values = input.split('/').map(function(v) {
        return v.replace(/\D/g, '')
      });
      if (values[0]) values[0] = this.checkValue(values[0], 31);
      if (values[1]) values[1] = this.checkValue(values[1], 12);
      var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + '/' : v;
      });
      htmlElement.value = output.join('').substr(0, 10);
    });
  }

  formatLikeExcel(card){
    var htmlElement = this.getHTMLElement(card);
    var values = htmlElement.value;
   
    var arr = values.split("-");
    // console.log("parsed value",arr,arr.length,arr[1],parseInt(arr[1]));
    if(arr.length > 1){    
      arr[1] = parseInt(arr[1]) ? parseInt(arr[1]) : this.months[arr[1].toLocaleLowerCase()];
      arr[2] = parseInt(arr[2]) ? parseInt(arr[2]) : '';
      var finalValue = arr.join('/');
      htmlElement.value = finalValue;
    }
  }

  getHTMLElement(card){
    var htmlElement;
    switch(card){
      case 'policyInceptionDate': {
        htmlElement = this.policyInceptionDate.nativeElement;
        break;
      }
      case 'retroactiveDate': {
        htmlElement = this.retroactiveDate.nativeElement;
        break;
      }
    }
    return htmlElement;
  }

  routeBack(){
    this.router.navigate(['reviewquote']);
  }

  docUpload(){
    this.router.navigate(['uploaddocuments']);
  }

  additionalDetails(){
    this.router.navigate(['additional-detail']);
  }

  reviewProposal(){
    this.router.navigate(['reviewproposal']);
  }

}