import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ModalConfirmComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    ModalConfirmComponent,
  ],
})
export class SharedModule {}
