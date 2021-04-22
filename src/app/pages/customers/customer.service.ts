import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { JWT_token } from "src/app/Auth/auth.service";
import { Icustom } from "./customer.interface";

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

  public getAllCustomer(): Observable<Icustom> {
    	const token = localStorage.getItem(JWT_token);
		return this.http
      .get<Icustom>(this.url, {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token,

        })
      })
			.pipe(retry(3), catchError(this.handleError));
	}
}
