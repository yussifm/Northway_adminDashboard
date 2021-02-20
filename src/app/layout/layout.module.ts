import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { PagesModule } from "../pages/pages.module";
import { LayoutComponent } from "./layout.component";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [LayoutComponent],
	imports: [CommonModule, SharedModule, PagesModule, RouterModule],
	exports: [SharedModule, PagesModule, LayoutComponent],
})
export class LayoutModule {}
