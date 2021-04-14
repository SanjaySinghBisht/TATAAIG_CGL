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
  proposalDetails = [];
  sumInsuredModalRef: BsModalRef;
  premiumBreakupModalRef : BsModalRef;
  config = { class: "theme-modal" };
 
  constructor(private router:Router,private toastr: ToastrService,private formBuilder : FormBuilder,private cd: ChangeDetectorRef,private modalService: BsModalService) { }

  ngOnInit(): void {
    this.documentArray.push(this.addDocumentGroup(0));
    this.getProposalDetails();
    this.initializeForm();
    console.log("VALUE OF FORM IS::::::",this.underwriterForm);

  }
  initializeForm(){
    this.underwriterForm = this.formBuilder.group({
      action:[null],
      remark:[''],
      addFile : [false],
      documentName : [''],
      docRemarks : [''],
      documentDetails : this.documentArray
    });
  }
  // initializeForm(){
  //   this.underwriterForm = this.formBuilder.group({
  //     action:[null],
  //     remark:[''],

  //     documentDetails : this.documentArray
  //   });
  // }
 
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
removeDocFileArr(ind){
  let docName = 'document_'+ind+'_name';
  this.documentArray.controls[ind].get(docName).setValue('');
}
onFileChange(event,ind) {
  let reader = new FileReader();
 
  if(event.target.files && event.target.files.length) {
    const [file] = event.target.files;
    this.setFormFileName(file,ind);
    reader.readAsDataURL(file);
  
    reader.onload = () => {
  
      this.cd.markForCheck();
    };
  }
}
setFormFileName(file,ind){
  let docName = 'document_'+ind+'_name';
  console.log("INDEX AND ::: DOCNAME",ind,docName);
  
  this.documentArray.controls[ind].get(docName).setValue(file.name);
  console.log("UPDATED:::::NAME:::",this.documentArray);
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
  getProposalDetails(){
    this.proposalDetails = [
      {
        member : {
            type: 'SELF',
            name : 'Harsh Sharma',
            gender : 'Male',
            dob : '24/12/1996',
            age : '25',
            insuredRelationShip : 'Self'
        },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'Yes',
            gq1Details : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,'
          },
          {
            gq2Response: 'Yes',
            insuranceDetailsSection: 'TATA AIG',
            policyNumber : 'XXXXXXXXXX'
          }
        ]
      },
      {
        member : {
          type: 'SPOUSE',
          name : 'Harsh Sharma',
          gender : 'Male',
          dob : '24/12/1996',
          age : '25',
          insuredRelationShip : 'Self'
      },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'No',
            gq1Details : null
          },
          {
            gq2Response: 'No',
            insuranceDetailsSection: null,
            policyNumber : null
          }
        ]
      },
      {
        member : {
          type: 'SON 1',
          name : 'Harsh Sharma',
          gender : 'Male',
          dob : '24/12/1996',
          age : '25',
          insuredRelationShip : 'Self'
      },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'No',
            gq1Details : null
          },
          {
            gq2Response: 'No',
            insuranceDetailsSection: null,
            policyNumber : null
          }
        ]
      },
      {
        member : {
          type: 'SON 2',
          name : 'Harsh Sharma',
          gender : 'Male',
          dob : '24/12/1996',
          age : '25',
          insuredRelationShip : 'Self'
      },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'No',
            gq1Details : null
          },
          {
            gq2Response: 'No',
            insuranceDetailsSection: null,
            policyNumber : null
          }
        ]
      },
      {
        member : {
          type: 'DAUGHTER 1',
          name : 'Harsh Sharma',
          gender : 'Male',
          dob : '24/12/1996',
          age : '25',
          insuredRelationShip : 'Self'
      },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'No',
            gq1Details : null
          },
          {
            gq2Response: 'No',
            insuranceDetailsSection: null,
            policyNumber : null
          }
        ]
      },
      {
        member : {
          type: 'DAUGHTER 2',
          name : 'Harsh Sharma',
          gender : 'Male',
          dob : '24/12/1996',
          age : '25',
          insuredRelationShip : 'Self'
      },
        nominees : [
          {
            name : 'Jyotika Sharma',
            gender : 'Female',
            dob : '29/10/1997',
            relationship : 'XXX',
            sharedContribution : '95%'
          },
          {
            name : 'Anant Sharma',
            gender : 'Male',
            dob : '29/10/2000',
            relationship : 'XXX',
            sharedContribution : '5%'
          }
        ],
        appointee: {
          name : 'Aman Sharma',
          relationship : 'XXXX',
          address : 'XXXX'
        },
        generalQueries : [
          {
            gq1Response : 'No',
            gq1Details : null
          },
          {
            gq2Response: 'No',
            insuranceDetailsSection: null,
            policyNumber : null
          }
        ]
      }
    ];
  }
  editDetails(editFor){
    console.log("Coming details are:::::",editFor);
  }

  openSumInsuredModal( sum_insured_breakup_template: TemplateRef<any>){
    this.sumInsuredModalRef = this.modalService.show(sum_insured_breakup_template,this.config);
  }

  openPremiumBreakupModal(premium_breakup_modal_template:TemplateRef<any>){
    this.premiumBreakupModalRef = this.modalService.show(premium_breakup_modal_template,this.config);
  }
}
