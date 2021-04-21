import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "../app/layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		LayoutModule,
		AppRoutingModule,
		BrowserAnimationsModule,
	],
	providers: [
		JwtHelperService,
		{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
