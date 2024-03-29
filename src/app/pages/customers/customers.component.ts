import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Icustom } from "./customer.interface";
import { CustomerService } from "./customer.service";

// export interface Customertable {
// 	name: string;
// 	position: number;
// 	weight: number;
// 	symbol: string;
// }

// const Customer_DATA: Customertable[] = [
// 	{ position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
// 	{ position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
// 	{ position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
// 	{ position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
// 	{ position: 5, name: "Boron", weight: 10.811, symbol: "B" },
// 	{ position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
// 	{ position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
// 	{ position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
// 	{ position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
// 	{ position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
// ];

@Component({
	selector: "app-customers",
	templateUrl: "./customers.component.html",
	styleUrls: ["./customers.component.css"],
})
export class CustomersComponent implements OnInit {
	constructor(private customData: CustomerService) {}
	user: Icustom = null;
	//Table
	displayedColumns: string[] = [
		"position",
		"name",
		"phone",
		"email",
		"image",
		"role",
	];
	dataSource = new MatTableDataSource();

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	ngOnInit(): void {
		this.initDtasource();
	}

	initDtasource() {
		this.customData
			.getAllCustomer()
			.pipe(map((data) => (this.user = data)))
			.subscribe();
	}
}
