import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";

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
		path: "Signpage",
		component: SignUpComponent,
	},
];

@NgModule({
	imports: [RouterModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
