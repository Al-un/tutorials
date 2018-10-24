import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { RestrictedComponent } from './restricted/restricted/restricted.component';
import { AdminModule } from './admin/admin.module';
import { CallbackComponent } from './public/callback/callback.component';
import { AuthGuard } from './auth/auth-guard.service';
import { ErrorComponent } from './public/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restricted', component: RestrictedComponent, canActivate: [AuthGuard], data: { expectedScopes: ['restricted', 'admin'] } },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
