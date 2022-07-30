import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app/app-routing.module';
import { AppComponent } from '../app/app.component';

import { AddProductComponent } from '../app/pages/add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '../app/components/product-list/product-list.component';
import { HomepageComponent } from '../app/pages/homepage/homepage.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { ProductCardComponent } from '../app/components/product-card/product-card.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryComponent } from '../app/components/category/category.component';
import { RegisterComponent } from '../app/pages/register/register.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryComponent,
    RegisterComponent,
    DashboardComponent,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
