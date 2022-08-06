import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login-guard/login.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path:'login', component:LoginPageComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
