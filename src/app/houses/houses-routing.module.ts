import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HouseDetailComponent } from './components/house-detail/house-detail.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{path: 'test', component: HouseDetailComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HousesRoutingModule {}
