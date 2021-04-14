import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-commonpages',
  templateUrl: './commonpages.component.html',
  styleUrls: ['./commonpages.component.sass']
})
export class CommonpagesComponent implements OnInit {

 	modalRef: BsModalRef;
  config = {class: "theme-modal modal-sm"};
 constructor(private router: Router,private modalService: BsModalService) {} 
 
  premiumModal(premium_breakup_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(premium_breakup_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }

  medicare(medicare_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(medicare_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  } 

  medicareprotect(medicare_product_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(medicare_product_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }   
  
  
   additionaldiscount(additional_discount_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(additional_discount_template,this.config);
  } 
  
  contactdetail(contact_detail_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(contact_detail_template,this.config);
  } 
  
   sentsucessfull(successfull_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(successfull_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  } 
  
  savesucessfull(save_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(save_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  } 
  meminclude(members_template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(members_template,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }
 
  dic1(declaration1_template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(declaration1_template,Object.assign({}, { class: 'theme-modal modal-lg declare-modal' }));
  }
  
   
	dic2(declaration2_template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(declaration2_template,Object.assign({}, { class: 'theme-modal modal-lg declare-modal' }));
  }
  
   paymentsuccess(payment_success1: TemplateRef<any>) {
     this.modalRef = this.modalService.show(payment_success1,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }
  
     otptemp(otptemplate: TemplateRef<any>) {
     this.modalRef = this.modalService.show(otptemplate,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }

  paymentunsuccess(payment_unsuccess: TemplateRef<any>) {
     this.modalRef = this.modalService.show(payment_unsuccess,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }
  
  paymentservererror(payment_server_error: TemplateRef<any>) {
     this.modalRef = this.modalService.show(payment_server_error,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }
  
  paymentsummary(payment_summary: TemplateRef<any>) {
     this.modalRef = this.modalService.show(payment_summary,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }


  ngOnInit(): void {
  }

}
