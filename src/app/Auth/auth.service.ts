import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { login_form } from "../pages/login/login.component";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient) {}
	private url = "http://localhost:3000/auth/login";

	login(loginform: login_form): Observable<any> {
		return this.http
			.post<any>(this.url, {
				email: loginform.email,
				password: loginform.password,
			})
			.pipe(
				map((token) => {
					localStorage.setItem("admin-token", token.access_token);
					return token;
				}),
			);
	}
}
