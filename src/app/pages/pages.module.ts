import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ErrandsComponent } from './errands/errands.component';
import { CustomersComponent } from './customers/customers.component';
import { PartnersComponent } from './partners/partners.component';
import { OrdersComponent } from './orders/orders.component';
import { ReportsComponent } from './reports/reports.component';

import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
	declarations: [
		DashboardComponent,
		LoginComponent,
		ProductComponent,
		ErrandsComponent,
		CustomersComponent,
		PartnersComponent,
		OrdersComponent,
		ReportsComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
	],
	exports: [
		SharedModule,
		DashboardComponent,
		RouterModule,
		LoginComponent,
		ProductComponent,
		ErrandsComponent,
		CustomersComponent,
		PartnersComponent,
		OrdersComponent,
		ReportsComponent,
	],
})
export class PagesModule {}
