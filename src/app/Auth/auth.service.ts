import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { login_form } from "../pages/login/login.component";
import { JwtHelperService } from "@auth0/angular-jwt";


export const  JWT_token = "admin-token";
@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}
	private url = "http://localhost:3000/auth/login";



	login(loginform: login_form): Observable<any> {
		return this.http
			.post<any>(this.url, {
				email: loginform.email,
				password: loginform.password,
			})
			.pipe(
				map((token) => {
					localStorage.setItem(JWT_token, token.access_token);
					return token;
				}),
			);
	}

  IsAuthenticated(): boolean{
    const token = localStorage.getItem(JWT_token);
    return !this.jwtHelper.isTokenExpired(token);

  }
}
