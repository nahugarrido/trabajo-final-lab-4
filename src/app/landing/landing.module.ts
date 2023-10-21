import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
@NgModule({
  declarations: [LandingComponent, ContactComponent, BannerComponent, TestimonialsComponent],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
