import { SkeletonModule } from 'primeng/skeleton';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { CardSkeletonComponent } from './components/card-skeleton/card-skeleton.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    CardSkeletonComponent,
  ],
  imports: [CommonModule, SkeletonModule],
  exports: [
    NavbarComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    CardSkeletonComponent,
  ],
})
export class SharedModule {}