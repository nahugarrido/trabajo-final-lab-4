import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseTableComponent } from './components/house-table/house-table.component';
import { HouseManagementComponent } from './components/house-management/house-management.component';
import { ModalCreateHouseComponent } from './components/modal-create-house/modal-create-house.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'management', component: HouseManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
