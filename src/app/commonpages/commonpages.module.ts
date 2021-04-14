import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgSelectModule} from '@ng-select/ng-select';
import { CommonPagesRoutingModule } from './commonpages-routing.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
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


@NgModule({
  declarations: [
					CovertproposalComponent,
					ReviewproposalComponent,
					NomineedetailsComponent,
					AdditionaldetailsComponent,
					PreviewquoteComponent,
					CustomerdetailsComponent,
					DetaillistComponent,
					PaymentComponent,
					HelpTutorialComponent,
					NotificationComponent
			],
  imports: [
  TabsModule.forRoot(),
    CommonModule,
		CommonPagesRoutingModule,
	NgSelectModule
  ]
})
export class CommonPagesModule { }
