import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from "@angular/material/table";

//Tables
export interface Errtable {
	name: string;
	position: number;
	weight: number;
	symbol: string;
}

const Errands_DATA: Errtable[] = [
	{ position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
	{ position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
	{ position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
	{ position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
	{ position: 5, name: "Boron", weight: 10.811, symbol: "B" },
	{ position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
	{ position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
	{ position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
	{ position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
	{ position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

@Component({
	selector: "app-errands",
	templateUrl: "./errands.component.html",
	styleUrls: ["./errands.component.css"],
})
export class ErrandsComponent implements OnInit {
	ErrView: boolean = true;
	ErrsForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	//Table
	displayedColumns: string[] = ["position", "name", "weight", "symbol"];
	dataSource = new MatTableDataSource(Errands_DATA);
  ngOnInit(): void {
    this.ErrsForm = this.fb.group({
			name: ["", [Validators.required]],
			content: ["", [Validators.required]],
			destination: ["", [Validators.required]],
		});
  }
}
