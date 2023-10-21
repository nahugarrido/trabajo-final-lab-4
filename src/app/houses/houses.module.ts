import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HousesRoutingModule } from './houses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseCardComponent } from './components/house-card/house-card.component';
import { SearchComponent } from './components/search/search.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    HouseListComponent,
    HouseCardComponent,
    SearchComponent,
  ],
  imports: [CommonModule, HousesRoutingModule, SharedModule],
})
export class HousesModule {}
