import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { JWT_token } from "src/app/Auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class OrdersService {
	constructor(private http: HttpClient) {}
	private url: string = "http://localhost:3000/order";

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error("An error occurred:", error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong.
			console.error(
				`Backend returned code ${error.status}, ` + `body was: ${error.error}`,
			);
		}
		// Return an observable with a user-facing error message.
		return throwError("Something bad happened; please try again later.");
	}

	getAllOrders(): Observable<any> {
		const token = localStorage.getItem(JWT_token);
		return this.http
			.get(this.url, {
				headers: new HttpHeaders({
					Authorization: "Bearer " + token,
				}),
			})
			.pipe(retry(3), catchError(this.handleError));
	}
}
