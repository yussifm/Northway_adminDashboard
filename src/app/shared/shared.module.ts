import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { MatTableModule } from "@angular/material/table";


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
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { HighchartsChartModule } from "highcharts-angular";

@NgModule({
	declarations: [HeaderComponent, FooterComponent, SidenavComponent],

	imports: [
		MatSelectModule,
		MatListModule,
		MatSidenavModule,
		FlexLayoutModule,
		MatMenuModule,
		CommonModule,
		MatCardModule,
    MatDividerModule,
     HighchartsChartModule,
    MatTableModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		RouterModule,
	],
	exports: [
		MatListModule,
		HeaderComponent,
		FooterComponent,
		SidenavComponent,
    MatCardModule,
     HighchartsChartModule,
    MatIconModule,
    MatTableModule,
		MatToolbarModule,
		MatSidenavModule,
		MatButtonModule,
		MatFormFieldModule,
		MatDividerModule,
		MatInputModule,
		MatToolbarModule,
		FlexLayoutModule,
		MatMenuModule,
		MatSelectModule,
	],

})
export class SharedModule {}
