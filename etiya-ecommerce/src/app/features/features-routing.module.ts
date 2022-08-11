import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesMenuBarComponent } from './categories/components/categories-menu-bar/categories-menu-bar.component';
import { HomepageComponent } from './common/pages/homepage/homepage.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"homepage",component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
