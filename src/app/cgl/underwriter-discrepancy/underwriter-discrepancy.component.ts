import { ChangeDetectorRef, Component, OnInit, TemplateRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-underwriter-discrepancy',
  templateUrl: './underwriter-discrepancy.component.html',
  styleUrls: ['./underwriter-discrepancy.component.sass']
})
export class UnderwriterDiscrepancyComponent implements OnInit {
  fileForm : FormGroup;
  documentArray = new FormArray([]);
  displaySecondUpload : Boolean = false;
  successModalRef: BsModalRef;
  config = { class: "theme-modal" };

  uwDocumentArr = [
    {
      documentName : 'Self',
      docLabel : 'UPLOAD INCOME DOCUMENTS',
      remark : "Self exceeding 'XXX' limit past 3 years income documents required"
    },
    {
      documentName : 'Daughter 1',
      docLabel : 'UPLOAD ID PROOF',
      remark : "Age exceeding 'XX' years or below 'XX' years, ID proof required"
    }
  ];
  constructor(private formBuilder : FormBuilder,private cd: ChangeDetectorRef, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeArray();
    console.log("DOCARRAY:::::::::::::::",this.documentArray.value);

  }

  shareQuote(success_template: TemplateRef<any>) {
    // this.contactModalRef.hide();
    this.successModalRef = this.modalService.show(success_template, this.config);
  }
  initializeForm(){
    this.fileForm = this.formBuilder.group({
      file1Name : [''],
      file1: [null],
      file2Name : [''],
      file2: [null]
    });
  }

  initializeArray(){
    this.uwDocumentArr.forEach(ele => {
      this.documentArray.push(this.addDocumentGroup(ele));
    });
  }

  addDocumentGroup(obj):FormGroup{
    let documentObject = {};
    documentObject['docLabel'] = [obj.docLabel];
    documentObject['docHead'] = [obj.documentName];
    documentObject['note'] = [obj.remark];
    documentObject['documentName'] = [''];
    documentObject['documentType'] = [''];
    documentObject['remarks'] = [''];
    return this.formBuilder.group(documentObject);
  }

  addDocument(){
    this.displaySecondUpload = true;
  }

  handleFileInput(event:any){
    console.log("EVENT IS ::::::::::",Object.keys(event));
    
  }

  onFileChange(event,ind) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // console.log("FILE NAME IS:::::::::",this.fileForm.get('file1Name').value);
      this.setFileName(file,ind);
      reader.readAsDataURL(file);
      reader.onload = () => {
        // if(fileNum == 'file1'){
        //   this.fileForm.patchValue({
        //     file1: reader.result
        //   });
        // }
        // else if(fileNum == 'file2'){
        //   this.fileForm.patchValue({
        //     file2: reader.result
        //   });  
        // }
        this.cd.markForCheck();
      };
    }
  }

  setFileName(file,ind){
    this.documentArray.controls[ind].get('documentName').setValue(file.name);
  }

  removeDocFileArr(ind){
    this.documentArray.controls[ind].get('documentName').setValue('');
  }
}
