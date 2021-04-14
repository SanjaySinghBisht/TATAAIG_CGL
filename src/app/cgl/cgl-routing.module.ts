import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CglComponent } from './cgl.component';
import { InformationSheetComponent } from './information-sheet/information-sheet.component';
import { ReviewQuoteComponent } from './review-quote/review-quote.component';
import { ConvertToProposalComponent } from './convert-to-proposal/convert-to-proposal.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import { UploadDocumentsComponent } from './upload-documents/upload-documents.component';
import { ReviewProposalComponent } from './review-proposal/review-proposal.component';
import { UnderwriterDiscrepancyComponent } from './underwriter-discrepancy/underwriter-discrepancy.component';
import { UwReviewProposalComponent } from './uw-review-proposal/uw-review-proposal.component';


const routes: Routes = [
  // {path:'cgl',component:CglComponent}
  {path:'information-sheet',component:InformationSheetComponent},
  {path: 'reviewquote',component:ReviewQuoteComponent},
  {path:'converttoproposal',component:ConvertToProposalComponent},
  {path:'additional-detail',component:AdditionalDetailsComponent},
  {path:'uploaddocuments',component:UploadDocumentsComponent},
  {path:'reviewproposal',component:ReviewProposalComponent},
  {path:'underwriter-dis',component:UnderwriterDiscrepancyComponent},
  {path:'uw-reviewproposal',component:UwReviewProposalComponent},

  // {path:'uw-reviewproposal',component:U}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CglRoutingModule { }
