import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';
import { HouseTableComponent } from './components/house-table/house-table.component';
import { HouseManagementComponent } from './components/house-management/house-management.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: HouseManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
