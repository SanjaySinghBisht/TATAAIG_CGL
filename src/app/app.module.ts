import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { QuoteListComponent } from './directives/quote-list/quote-list.component';
import { SvgIconsComponent } from './directives/svg-icons/svg-icons.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent } from './directives/left-menu/left-menu.component';
import { CommonPagesModule } from './commonpages/commonpages.module';
import { CommonpagesComponent } from './commonpages/commonpages.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LeftmenuModule } from 'leftmenu';
import { HeaderModule } from 'header';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ToastrModule } from 'ngx-toastr';
import { CglModule } from './cgl/cgl.module';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    SvgIconsComponent,
    LeftMenuComponent,
    CommonpagesComponent,
  ],
  imports: [
    BrowserModule, NgxSpinnerModule,
    BrowserAnimationsModule,
    NgSelectModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    NgxMaskModule.forRoot(),
    CommonPagesModule,
    RecaptchaModule,
    HttpClientModule,
    FormsModule,
    LeftmenuModule,
    HeaderModule,
    FontAwesomeModule,
    CustomFormsModule,
    CommonPagesModule,
    CglModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {

}



