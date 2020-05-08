import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfCreateService } from './pdf-create.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PdfCreateService
  ]
})
export class PdfCreateModule { }
