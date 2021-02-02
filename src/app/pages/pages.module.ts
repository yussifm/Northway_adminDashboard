import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from './login/login.component';
@NgModule({
	declarations: [DashboardComponent, LoginComponent],
	imports: [CommonModule, SharedModule],
	exports: [SharedModule, DashboardComponent],
})
export class PagesModule {}
