import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent implements OnInit {
	modalRef: BsModalRef;
  config = {class: "theme-modal modal-sm"};
  constructor(private modalService: BsModalService) { }
  
  paymentsuccess(payment_success1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(payment_success1,Object.assign({}, { class: 'theme-modal modal-lg popup-small' }));
  }
  ngOnInit(): void {
  }

}
