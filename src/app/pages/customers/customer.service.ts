import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class CustomerService {
	constructor(private http: HttpClient) {}
	private url = "http://localhost:3000/user";

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

	public async getAllCustomer() {
		return this.http.get(this.url).pipe(retry(3), catchError(this.handleError));
	}
}
