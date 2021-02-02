import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";

import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FlexLayoutModule } from "@angular/flex-layout";

// Material design
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SidenavComponent],

	imports: [
		FlexLayoutModule,
		CommonModule,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
	],
	exports: [
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
		MatCardModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatToolbarModule,
		FlexLayoutModule,
	],
})
export class SharedModule {}
