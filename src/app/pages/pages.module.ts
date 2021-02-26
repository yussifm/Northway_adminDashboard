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
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
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
		SignUpComponent,
	],
	imports: [CommonModule, SharedModule, ReactiveFormsModule, RouterModule],
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
		SignUpComponent,
	],
})
export class PagesModule {}
