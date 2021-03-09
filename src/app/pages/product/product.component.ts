import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
	productForm: FormGroup;
	proView: boolean = true;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.productForm = this.fb.group({
			Name: ["", [Validators.required]],
			Category: ["", [Validators.required]],
			Price: [[Validators.required]],
			Description: ["", [Validators.required]],
			Image: ["", [Validators.required]],
		});
	}
}

