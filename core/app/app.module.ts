import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { PdfCreateModule } from './pdf-create/pdf-create.module';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PdfCreateModule,
  ],
  providers: [],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
