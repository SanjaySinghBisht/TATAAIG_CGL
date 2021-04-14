import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';
import { CglRoutingModule } from './cgl-routing.module';
import { CglComponent } from './cgl.component';
import { InformationSheetComponent } from './information-sheet/information-sheet.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReviewQuoteComponent } from './review-quote/review-quote.component';
import { ConvertToProposalComponent } from './convert-to-proposal/convert-to-proposal.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ReviewProposalComponent } from './review-proposal/review-proposal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UnderwriterDiscrepancyComponent } from './underwriter-discrepancy/underwriter-discrepancy.component';
import { UwReviewProposalComponent } from './uw-review-proposal/uw-review-proposal.component';

@NgModule({
  declarations: [CglComponent, InformationSheetComponent, ReviewQuoteComponent, ConvertToProposalComponent, AdditionalDetailsComponent, UploadDocumentsComponent, ReviewProposalComponent, UnderwriterDiscrepancyComponent, UwReviewProposalComponent],
  imports: [
    CommonModule,
    CglRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
		timeOut: 20000,
		preventDuplicates: true
	}),
  ]
})
export class CglModule { }
