import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-review-proposal',
  templateUrl: './review-proposal.component.html',
  styleUrls: ['./review-proposal.component.sass']
})
export class ReviewProposalComponent implements OnInit {
  underwriterForm: FormGroup;
  documentArray = new FormArray([]);
  queryRaised : Boolean = false;
  quoteApproved: Boolean = false;
  quoteRejected: Boolean = false;
  referToUW: Boolean = false;
  uwNum: any;
  displayQuoteForm: Boolean = true;
  isProposalFinalized: Boolean = false;
  reasonArray = ['Approve','Reject','Refer To UW 1','Refer To UW 2','Refer To UW 3','Query'];
 
 
  constructor(private router:Router,private toastr: ToastrService,private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.documentArray.push(this.addDocumentGroup(0));
    this.initializeForm();
    console.log("VALUE OF FORM IS::::::",this.underwriterForm);

  }

  initializeForm(){
    this.underwriterForm = this.formBuilder.group({
      action:[null],
      remark:[''],

      documentDetails : this.documentArray
    });
  }
 
  finalizeProposal(){
    this.toastr.success('Policy Generated Successfully. Your Policy Number is AXCVBADA.','',{closeButton:true});
    this.isProposalFinalized = true;
  }
  addDocumentGroup(ind):FormGroup{
    let documentObject = {};
    let docName = 'document_'+ind+'_name';
    let docRemark = 'remark_'+ind;
    documentObject[docName] = [''];
    documentObject[docRemark] = [''];
    return this.formBuilder.group(documentObject);
  }

  addDocumentFileBtn(){
    let length = this.underwriterForm.get('documentDetails').value.length;
    this.documentArray.push(this.addDocumentGroup(length));
    console.log("PREVARRAY:::",this.documentArray);
    
    // this.documentForm.get('previousYearPolicyCopy').value.push(this.addDocumentGroup(length));
    console.log("DOC FORM ARRAY::",this.underwriterForm.get('documentDetails').value);
}

routeBack(){
    this.router.navigate(['converttoproposal']);
  }
  removeRemarks(){

  }
  removeFileFromArr(ind){
    this.documentArray.removeAt(ind);
  }
  uwSubmitQuote(){
    console.log("FORM SUBMIT:::::",this.underwriterForm.value);
    
    if(this.underwriterForm.get('action').value){
      this.displayQuoteForm = false;
    }
    if(this.underwriterForm.get('action').value=='Query'){
      this.queryRaised = true;
      this.quoteApproved = false;
      this.quoteRejected = false;
      this.referToUW = false;
    }
    else if(this.underwriterForm.get('action').value=='Approve'){
      this.quoteApproved = true;
      this.quoteRejected = false;
      this.queryRaised = false;
      this.referToUW = false;
    }
    else if(this.underwriterForm.get('action').value=='Reject'){
      this.quoteRejected = true;
      this.queryRaised = false;
      this.quoteApproved = false;
      this.referToUW = false;
    }
    else{
      this.referToUW = true;
      this.queryRaised = false;
      this.quoteApproved = false;
      this.quoteRejected = false;
      let arr = this.underwriterForm.get('action').value.split(" ");
      this.uwNum = arr[arr.length-1];
      console.log("number is:::::::",this.underwriterForm.get('action').value.split(" "),":::::",this.uwNum);
    }
  }
  
}
