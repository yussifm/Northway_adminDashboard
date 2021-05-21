import { Iproduct } from "./product.interface";
import { ProductService } from "./service/product.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map, tap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";

//Tables
export interface Producttable {
	name: string;
	position: any;
	description: string;
	price: string;
	category: string;
	image: string;
}


// let Product_DATA: Producttable[];

// const Product_DATA: Producttable[] = [
// 	{ position: 1, name: "Hydrogen", description: 1.0079, price: "H" },
// 	{ position: 2, name: "Helium", description: 4.0026, price: "He" },
// 	{ position: 3, name: "Lithium", description: 6.941, price: "Li" },
// 	{ position: 4, name: "Beryllium", description: 9.0122, price: "Be" },
// 	{ position: 5, name: "Boron", description: 10.811, price: "B" },
// 	{ position: 6, name: "Carbon", description: 12.0107, price: "C" },
// 	{ position: 7, name: "Nitrogen", description: 14.0067, price: "N" },
// 	{ position: 8, name: "Oxygen", description: 15.9994, price: "O" },
// 	{ position: 9, name: "Fluorine", description: 18.9984, price: "F" },
// 	{ position: 10, name: "Neon", description: 20.1797, price: "Ne" },
// ];
// //
// Categories
interface ICategory {
	value: string;
	viewValue: string;
}

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
	productForm: FormGroup;
	proView: boolean = true;
	product: Iproduct[] = null;

	constructor(
		private fb: FormBuilder,
		private productData: ProductService,
		private router: Router,
	) {}

	//Table
	displayedColumns: string[] = [
		"position",
		"name",
		"description",
		"price",
		"category",
		"image",
	];
	dataSource = new MatTableDataSource();

applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	category: ICategory[] = [
		{ value: "Electronics", viewValue: "Electronics" },
		{ value: "Food", viewValue: "Food" },
		{ value: "Grocery", viewValue: "Grocery" },
		{ value: "Ingredients", viewValue: "Ingredients" },
		{ value: "Medical", viewValue: "Medical" },
		{ value: "Personnel Care", viewValue: "Personnel Care" },
		{ value: "Gifts and Parcels", viewValue: "Gifts and Parcels" },
		{ value: "Pick-ups", viewValue: "Pick-ups" },
		{ value: "Others", viewValue: "Others" },

	];

	uploadFile(event) {
		const file = (event.target as HTMLInputElement).files[0];
		this.productForm.patchValue({
			Product_image: file,
		});
		this.productForm.get("Product_image").updateOn;
	}

	addProduct() {
		// if (this.productForm.invalid) {
		// 	return;
		// }
		console.log(this.productForm.value);
		this.productData.AddProductSer(this.productForm.value).subscribe(
			(response) => console.log(response),
			(error) => console.log(error),
		);
	}

	ngOnInit(): void {
		this.initDtasource();

		this.productForm = this.fb.group({
			product_name: ["", [Validators.required]],
			product_description: ["", [Validators.required]],
			product_price: [[Validators.required]],
			categories: ["", [Validators.required]],

			Product_image: ["", [Validators.required]],
		});
	}

	initDtasource() {
		this.productData
			.GetAllProductSer()
			.pipe(
				map((data: any) => {
					this.product = data;
				}),
			)
			.subscribe();
	}
}
