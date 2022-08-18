import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { HomepageComponent } from 'src/app/features/common/pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
=======
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent}
>>>>>>> ae70c223006d8c8ec9d6c55612b160dd9b2256d3
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
