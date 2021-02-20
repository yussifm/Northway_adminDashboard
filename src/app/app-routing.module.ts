import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "dashboard",
		component: DashboardComponent,
	},
];

@NgModule({
	imports: [RouterModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
