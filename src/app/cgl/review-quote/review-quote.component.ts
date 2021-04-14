import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-review-quote',
  templateUrl: './review-quote.component.html',
  styleUrls: ['./review-quote.component.sass']
})
export class ReviewQuoteComponent implements OnInit {

  uwUser : Boolean = false;
  quoteApproved: Boolean = false;
  quoteRejected: Boolean = false;
  referToUW: Boolean = false;
  uwNum: any;
  displayQuoteForm: Boolean = true;
  uwQuoteForm: FormGroup;
  reasonArray = ['Approve','Reject','Refer To UW 1','Refer To UW 2','Refer To UW 3'];
  titleArray=['Mr','Mrs'];
  contactModalRef: BsModalRef;
  successModalRef: BsModalRef;
  config = { class: "theme-modal" };

  constructor(private modalService: BsModalService,private router: Router,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.uwQuoteForm = this.formBuilder.group({
      action:[null],
      remark:['']
    });
  }

  route(){
    this.router.navigate(['converttoproposal']);
  }

  uwSubmitQuote(){
    if(this.uwQuoteForm.get('action').value){
      this.displayQuoteForm = false;
    }
    if(this.uwQuoteForm.get('action').value=='Approve'){
      this.quoteApproved = true;
      this.quoteRejected = false;
      this.referToUW = false;
    }
    else if(this.uwQuoteForm.get('action').value=='Reject'){
      this.quoteRejected = true;
      this.quoteApproved = false;
      this.referToUW = false;
    }
    else{
      this.referToUW = true;
      this.quoteApproved = false;
      this.quoteRejected = false;
      let arr = this.uwQuoteForm.get('action').value.split(" ");
      this.uwNum = arr[arr.length-1];
      console.log("number is:::::::",this.uwQuoteForm.get('action').value.split(" "),":::::",this.uwNum);
    }
  }

  removeRemarks(){
    this.uwQuoteForm.get('remark').setValue('');
  }

  openContatcModal(contact_detail_template:TemplateRef<any>){
    this.contactModalRef = this.modalService.show(contact_detail_template,this.config);
  }

  openSuccessModal(success_template:TemplateRef<any>){
    this.contactModalRef.hide();
    this.successModalRef = this.modalService.show(success_template,this.config);
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

}
