import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NgReduxModule} from '@angular-redux/store';

import {CompanyComponent} from "./company/company.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { BrandComponent } from './brand/brand.component';
import { DivisionComponent } from './division/division.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,BrowserModule, FormsModule
  ],
  declarations: [
    CompanyComponent,
    BrandComponent,
    DivisionComponent,
    ProfileComponent,
  ],
  exports: [
    CompanyComponent,
    DivisionComponent,
    BrandComponent,
    ProfileComponent

  ],
  providers: [],
})
export class CMPModule { }
