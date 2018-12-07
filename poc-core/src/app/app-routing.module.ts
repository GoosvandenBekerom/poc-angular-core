import { ContactModule } from './views/contact/contact.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from './views/dashboard/dashboard.module';

export function dashboardEntry() {
  return DashboardModule;
}

export function contactEntry() {
  return ContactModule;
}

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: dashboardEntry
  },
  {
    path: 'contact',
    loadChildren: contactEntry
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
