import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from "@angular/forms";

import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/Auth/auth.service";

export interface login_form {
	email: string;
	password: string;
}

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;

	LogintoAdmin() {
		if (this.loginForm.invalid) {
			return;
		}

		this.auth
			.login(this.loginForm.value)
			.pipe(
				map((token) => {
					this.router.navigate(["main"]);
				}),
			)
			.subscribe();
	}
	constructor(
		private router: Router,
		private fb: FormBuilder,
		private auth: AuthService,
	) {}

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
