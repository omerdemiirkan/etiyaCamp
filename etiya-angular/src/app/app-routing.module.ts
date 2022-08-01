import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';


const routes: Routes = [
  {path:"",redirectTo:"homepage" ,pathMatch:"full"},
  {path:"homepage",component:HomepageComponent ,},
  {path:"add-product",component:AddProductComponent,},
  {path:"dashboard/customer/add",component:EditCustomerComponent,},
  {path:"dashboard/customers",component:DashboardComponent,},
  {path:"dashboard/customer/:id",component:EditCustomerComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
