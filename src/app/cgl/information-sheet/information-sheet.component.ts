import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EventManager } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-sheet',
  templateUrl: './information-sheet.component.html',
  styleUrls: ['./information-sheet.component.sass']
})
export class InformationSheetComponent implements OnInit {
  premiumCalculate = false;
  errMsg:Boolean = false;
  active:Boolean = false;
  locationArray = [
    'Hyderabad' ,
     'Lucknow' ,
    'Delhi' 
  ]
  titleArray=['MR','MRS'];
  channel =['Broking','Gc']
  proposalArray=[{name:'First Time Buy'},
  {name:'Second Time Buy'}]
  stateArray =[{name:'Bihar'},{name:'Delhi'},{name:'UP'}]
  businessForm =[{name:'Individual'},{name:'Self'}]
  businessDescriptionArray=[{desc:'Manufacturating/Selling Of Garments'}]
  policyForm =[{value:'CGL-Claims Mode'}]
  hotelGrade =[{grade:'4'},{grade:'3'}]
  question =[{value:'Yes'},{value:'No'}]
  aggregateLimitArray =[{name:'India But Worldwide For Travel Of Executive'}]
  contactModalRef: BsModalRef;
  successModalRef: BsModalRef;
  premiumBreakupModalRef: BsModalRef;
  saveModalRef: BsModalRef;
  config = { class: "theme-modal" };
  informationSheetForm : FormGroup;
  inputFocusClass;
  error=true;
  invalidMsg : Boolean = false;
  userType: string = 'NSTP';
  nstpUser:Boolean = false;
  salutationArr = ['Mr', 'Mrs', 'Ms'];
  months: Object = {
    'jan': '01',
    'feb': '02',
    'mar': '03',
    'apr': '04',
    'may': '05',
    'jun': '06',
    'jul': '07',
    'aug': '08',
    'sep': '09',
    'oct': '10',
    'nov': '11',
    'dec': '12'
  };
  @ViewChild('policyInceptionDate')policyInceptionDate:ElementRef;
  @ViewChild('retroactiveDate')retroactiveDate:ElementRef;

  constructor( private modalService: BsModalService,
               private formBuilder: FormBuilder,
               private eventManager: EventManager,
               private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    // this.Calculate();
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.preFormatDates(this.policyInceptionDate.nativeElement);
    this.preFormatDates(this.retroactiveDate.nativeElement);
  }

  initializeForm(){
    this.informationSheetForm = this.formBuilder.group({
      channel:[null],
      proposal:[null],
      location:[null],
      state:[null],
      businessForm:[null],
      businessDescription:[null],
      policyForm:[null],
      hotel:[null],
      question:[null],
      questionOffered:[null],
      coverageTerritoryAggregate:[null],
      coverageTerritoryProducts:[null],
      coverageJurisdictionAggregate:[null],
      coverageJurisdictionProducts:[null],
      title:[null],
      producerName:[''],
      producerCode:[''],
      quoteDate:[''],
      quoteCurrency:[''],
      indianInsuredName:[''],
      pinCode:[''],
      houseNo:[''],
      landmark:[''],
      village_district:[''],
      town_city:[''],
      gstNumber:[''],
      policyInceptionDate:[''],
      retroactiveDate:[''],
      totalNumberOfRooms:[''],
      totalNoOfStudents:[''],
      numberOfWindmills:[''],
      totalMwWindmills:[''],
      noOfFlats:[''],
      numberOfSolarPlants:[''],
      totalMwSolar:[''],
      indiaTurnover:[''],
      euTurnover:[''],
      usCanadaTurnover:[''],
      restWorldTurnover:[''],
      reasonForReferal:['']      
    });
  }  
  Calculate() {
    this.active = true;
    this.nstpUser = this.userType == 'NdSTP'? true: false;
    if(!this.nstpUser){
      this.premiumCalculate = true
    }
  }

  contactDetailModal(contact_detail_template: TemplateRef<any>) {
    this.contactModalRef = this.modalService.show(contact_detail_template, this.config);
  }

  shareQuote(success_template: TemplateRef<any>) {
    this.contactModalRef.hide();
    this.successModalRef = this.modalService.show(success_template, this.config);
  }

  openPremiumBreakupModal(premium_breakup_modal_template: TemplateRef<any>){
    this.premiumBreakupModalRef = this.modalService.show(premium_breakup_modal_template,this.config);
  }

  saveQuote(save_template: TemplateRef<any>){
    this.contactModalRef.hide();
    this.saveModalRef = this.modalService.show(save_template,this.config);
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

  preFormatDates(htmlElement) {
    this.eventManager.addEventListener(htmlElement, 'keydown', (e) => {
      var input = htmlElement.value;
      if (/[\-]/.test(input)) return;
      var key = e.keyCode || e.charCode;

      if (key == 8 || key == 46)
        return false;

      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 1);
      var values = input.split('/').map(function (v) {
        return v.replace(/\D/g, '')
      });
      if (values[0]) values[0] = this.checkValue(values[0], 31);
      if (values[1]) values[1] = this.checkValue(values[1], 12);
      var output = values.map(function (v, i) {
        return v.length == 2 && i < 2 ? v + '/' : v;
      });
      htmlElement.value = output.join('').substr(0, 10);
    });
  }

  formatLikeExcel(dateType) {
    var htmlElement = this.getHtmlElement(dateType);
    var values = htmlElement.value;

    var arr = values.split("-");
    // console.log("parsed value",arr,arr.length,arr[1],parseInt(arr[1]));
    if (arr.length > 1) {
      arr[1] = parseInt(arr[1]) ? parseInt(arr[1]) : this.months[arr[1].toLocaleLowerCase()];
      // arr[2] = parseInt(arr[2]) % 100;
      var finalValue = arr.join('/');
      htmlElement.value = finalValue;
    }
  }

  getHtmlElement(dateType){
    let htmlElement;
    switch (dateType){
      case 'policyInceptionDate' : {
        htmlElement = this.policyInceptionDate.nativeElement;
        break;
      }
      case 'retroactiveDate' : {
        htmlElement = this.retroactiveDate.nativeElement;
        break;
      }
    }
    return htmlElement;
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

  formatName(evt: any) {
    var regex = new RegExp("^[a-zA-Z \s]+$");
    var str = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
    if (regex.test(str)) {
      return true;
    }
    else {
      evt.preventDefault();
      return false;
    }
  }

  formatEmail(evt: any) {
    var regex = /[A-Z0-9a-z@\._-]/;
    var str = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
    if (regex.test(str)) {
      return true;
    }
    else {
      evt.preventDefault();
      return false;
    }
  }

  route(){
    this.saveModalRef? this.saveModalRef.hide(): null;
    this.successModalRef? this.successModalRef.hide(): null;
    this.router.navigate(['reviewquote']);
  }

}
