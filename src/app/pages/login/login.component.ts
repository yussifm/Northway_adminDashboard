import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";

import { Router } from "@angular/router";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	gotoMain() {
		this.router.navigate(["main"]);
	}
	constructor(private router: Router, private fb: FormBuilder) {}

	ngOnInit(): void {
		this.loginForm = this.fb.group({
			email: [
				"",
				[
					Validators.required,
					Validators.email,
					Validators.pattern("[a-z0-9.@]*"),
				],
			],
			password: ["", [Validators.required, Validators.min(8)]],
		});
	}
}
