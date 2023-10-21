import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/components/landing/landing.component';
import { HomeComponent } from './houses/components/home/home.component';
import { HouseDetailComponent } from './houses/components/house-detail/house-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  {
    path: 'houses',
    component: HomeComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: '${id}',
        component: HouseDetailComponent,
      } /* ruta dinamica pendiente */,
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
