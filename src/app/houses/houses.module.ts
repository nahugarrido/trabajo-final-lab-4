import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HousesRoutingModule } from './houses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { SearchComponent } from './components/search/search.component';
import { HouseTableComponent } from './components/house-table/house-table.component';
import { HouseManagementComponent } from './components/house-management/house-management.component';
import { ModalCreateHouseComponent } from './components/modal-create-house/modal-create-house.component';

@NgModule({
  declarations: [
    HomeComponent,
    HouseListComponent,
    HouseCardComponent,
    SearchComponent,
    HouseTableComponent,
    HouseManagementComponent,
    ModalCreateHouseComponent,
  ],
  imports: [CommonModule, HousesRoutingModule, SharedModule],
})
export class HousesModule {}
