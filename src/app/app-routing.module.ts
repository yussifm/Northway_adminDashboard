import { CustomersComponent } from "./pages/customers/customers.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { ProductComponent } from "./pages/product/product.component";
import { ErrandsComponent } from "./pages/errands/errands.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { PartnersComponent } from "./pages/partners/partners.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { AuthGuard } from "./Gaurd/auth.guard";
import { ProfileComponent } from "./pages/profile/profile.component";

const routes: Routes = [
	{
		path: "",
		component: LoginComponent,
	},
	{
		path: "login",
		component: LoginComponent,
	},

	{
		path: "main",
		component: LayoutComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: "",
				component: DashboardComponent,
			},
			{
				path: "dashboad",
				component: DashboardComponent,
			},
			{
				path: "products",
				component: ProductComponent,
			},
			{
				path: "errands",
				component: ErrandsComponent,
			},
			{
				path: "customers",
				component: CustomersComponent,
			},
			{
				path: "order",
				component: OrdersComponent,
			},
			{
				path: "partners",
				component: PartnersComponent,
			},
			{
				path: "reports",
				component: ReportsComponent,
			},
			{
				path: "profile",
				component: ProfileComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
