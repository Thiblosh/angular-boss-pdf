import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AngularBossPdfModule } from './modules/angular-boss-pdf/angular-boss-pdf.module';
import { AngularBossPdfService } from './services/angular-boss-pdf.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularBossPdfModule
  ],
  providers: [AngularBossPdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
