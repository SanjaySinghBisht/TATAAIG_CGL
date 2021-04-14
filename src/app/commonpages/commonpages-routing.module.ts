import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovertproposalComponent } from './covertproposal/covertproposal.component';
import { ReviewproposalComponent } from './reviewproposal/reviewproposal.component';
import { NomineedetailsComponent } from './nomineedetails/nomineedetails.component';
import { AdditionaldetailsComponent } from './additionaldetails/additionaldetails.component';
import { PreviewquoteComponent } from './previewquote/previewquote.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { DetaillistComponent } from './detaillist/detaillist.component';
import { PaymentComponent } from './payment/payment.component';
import { HelpTutorialComponent } from './help-tutorial/help-tutorial.component';
import { NotificationComponent } from './notification/notification.component';
const routes: Routes = [
				{ path: 'convertproposals', component: CovertproposalComponent},
				{ path: 'reviewproposals', component: ReviewproposalComponent},
				{ path: 'nomineedetails', component: NomineedetailsComponent},
				{ path: 'additionaldetails', component: AdditionaldetailsComponent},
				{ path: 'previewquotes', component: PreviewquoteComponent},
				{ path: 'customerdetails', component: CustomerdetailsComponent},
				{ path: 'detaillists', component: DetaillistComponent},
				{ path: 'payment-cmn', component: PaymentComponent},
				{path:'help-tutorial',component:HelpTutorialComponent},
				{path:'notification',component:NotificationComponent}
		];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonPagesRoutingModule { }
