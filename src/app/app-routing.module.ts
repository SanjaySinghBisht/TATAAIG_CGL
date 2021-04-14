import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CglComponent } from './cgl/cgl.component';
import { SvgIconsComponent } from './directives/svg-icons/svg-icons.component';

const routes: Routes = [  { path: '', redirectTo: 'cgl', pathMatch: 'full' },
						  { path: 'svg-icons', component: SvgIconsComponent},
						  {path:'cgl',component:CglComponent}
						  // { path: 'commonpages', component: CommonpagesComponent}
						];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
