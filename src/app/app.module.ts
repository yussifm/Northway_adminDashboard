import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
	JwtHelperService,
	JwtInterceptor,
	JWT_OPTIONS,
} from "@auth0/angular-jwt";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "../app/layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from "@angular/common/http";


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
		{
			provide: HTTP_INTERCEPTORS,
			useClass: JwtInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
