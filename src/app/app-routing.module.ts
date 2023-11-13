import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './users/components/login/login.component';
import { RegisterComponent } from './users/components/register/register.component';
import { LandingComponent } from './landing/pages/landing/landing.component';
const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
    pathMatch: 'full',
  },
  {
    path: 'houses',
    loadChildren: () =>
      import('./houses/houses.module').then((m) => m.HousesModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
