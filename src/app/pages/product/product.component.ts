import { ProductService } from "./service/product.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";


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
	product: any;

	constructor(
		private fb: FormBuilder,
		private productData: ProductService,
		private router: Router,
	) {}

	category: ICategory[] = [
		{ value: "Electronics", viewValue: "Electronics" },
		{ value: "Food", viewValue: "Food" },
		{ value: "tacos-2", viewValue: "Tacos" },
		{ value: "tacos-3", viewValue: "Tacos" },
		{ value: "tacos-4", viewValue: "Tacos" },
		{ value: "tacos-5", viewValue: "Tacos" },
		{ value: "tacos-6", viewValue: "Tacos" },
		{ value: "tacos-7", viewValue: "Tacos" },
		{ value: "tacos-8", viewValue: "Tacos" },
		{ value: "tacos-9", viewValue: "Tacos" },
		{ value: "tacos-10", viewValue: "Tacos" },
	];

	addProduct() {
		if (this.productForm.invalid) {
			return;
		}
    this.productData.AddProductSer(this.productForm.value).pipe(map((token) => {
      this.router.navigate(["products"]);

    })).subscribe();
	}
	ngOnInit(): void {
		this.productData.GetAllProductSer().subscribe((data: any) => {
			this.product = data;
		});

		this.productForm = this.fb.group({
			Name: ["", [Validators.required]],
			Description: ["", [Validators.required]],
			Price: [[Validators.required]],
			Category: ["", [Validators.required]],

			Image: ["", [Validators.required]],
		});
	}
}





