import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { UsersRoutingModule } from './users-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
  exports: [LoginComponent, RegisterComponent],
})
export class UsersModule {}
