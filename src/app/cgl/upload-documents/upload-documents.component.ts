import { Component, OnInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-documents',
  templateUrl: './upload-documents.component.html',
  styleUrls: ['./upload-documents.component.sass']
})
export class UploadDocumentsComponent implements OnInit {

  documentForm : FormGroup;
  expiringPolicyCopyArray = new FormArray([]);

  constructor(private router: Router, private formBuilder : FormBuilder,private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.initializeForm();
    this.expiringPolicyCopyArray.push(this.addDocumentGroup(0));
  }

  initializeForm(){
    this.documentForm = this.formBuilder.group({
      docName:[''],
      document:[''],
      expiringPolicyCopy:this.expiringPolicyCopyArray,
      epCopyFileName:[''],
      epCopyFile:['']
    });
  }

  addDocumentGroup(ind):FormGroup{
    let documentObject = {};
    let docCnt = 'document_'+ind;
    let docName = 'document_'+ind+'_name';
    let docType = 'document_'+ind+'_type';
    let docRemark = 'remark_'+ind;
    documentObject[docCnt] = [''];
    documentObject[docName] = [''];
    documentObject[docType] = [''];
    documentObject[docRemark] = [''];
    return this.formBuilder.group(documentObject);
  }

  addDocumentFileBtn(docType){
    switch (docType) {
      case 'expiringPolicyCopy':{
        let length = this.documentForm.get('expiringPolicyCopy').value.length;
        this.expiringPolicyCopyArray.push(this.addDocumentGroup(length));
        console.log("PREVARRAY:::",this.expiringPolicyCopyArray);
        
        // this.documentForm.get('previousYearPolicyCopy').value.push(this.addDocumentGroup(length));
        console.log("DOC FORM ARRAY::",this.documentForm.get('expiringPolicyCopy').value);
        break;
      }
    }
  }

  onFileChange(event,docFor,ind) {
    let reader = new FileReader();
   
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.setFormFileName(docFor,file,ind);
      reader.readAsDataURL(file);
    
      reader.onload = () => {
    
        this.cd.markForCheck();
      };
    }
  }

  setFormFileName(docFor,file,ind){
    switch(docFor){
      case 'document':{
        this.documentForm.patchValue({
          docName: file.name
        });
        break;
      }
      case 'expiringPolicy':{
        let docName = 'document_'+ind+'_name';
        this.expiringPolicyCopyArray.controls[ind].get(docName).setValue(file.name);
        console.log("UPDATED:::::NAME:::",this.expiringPolicyCopyArray);
        break;
      }
    }
  }

  removeDocFile(doc){
    switch(doc){
      case 'document':{
        this.documentForm.patchValue({
          docName: ''
        });
        break;
      }
      case 'expiringPolicy':{
        this.documentForm.patchValue({
          epCopyFileName: ''
        });
        break;
      }
    }
  }

  removeDocFileArr(ind,docFor){
    switch (docFor) {
      case 'previousYearPolicyCopy':{
        let docName = 'document_'+ind+'_name';
        this.expiringPolicyCopyArray.controls[ind].get(docName).setValue('');
        break;
      }
    }
  }
  
  removeFileFromArr(ind){
    console.log(this.expiringPolicyCopyArray.removeAt(ind));
    
  }

  route(){
    this.router.navigate(['converttoproposal']);
  }

  routeBack(){
    this.router.navigate(['additional-detail']);
  }


}
