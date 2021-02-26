import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
	signUpForm: FormGroup;

	constructor(private fb: FormBuilder, private router: Router) {}

	goTologin() {
		this.router.navigate(["login"]);
	}

	ngOnInit(): void {
		this.signUpForm = this.fb.group({
			name: ["", [Validators.required]],
			email: [
				"",
				[
					Validators.required,
					Validators.pattern(
						"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
					),
				],
			],
			password: ["", [Validators.required, Validators.minLength(8)]],
			confirmPassword: [, [Validators.required]],
			role: ["admin"],
		});
	}
}
