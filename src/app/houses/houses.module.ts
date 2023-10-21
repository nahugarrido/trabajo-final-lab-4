import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HousesRoutingModule } from './houses-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HousesRoutingModule],
})
export class HousesModule {}
