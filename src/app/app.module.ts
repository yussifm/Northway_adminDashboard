import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "../app/layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, LayoutModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
