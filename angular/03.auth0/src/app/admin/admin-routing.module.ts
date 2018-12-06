import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AuthGuard } from '../auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component, canActivate: [AuthGuard], data: { expectedScopes: 'admin' } },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard], data: { expectedScopes: 'admin' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
