import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [LandingComponent, FooterComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
