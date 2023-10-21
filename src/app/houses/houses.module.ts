import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    HouseDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HousesModule { }
