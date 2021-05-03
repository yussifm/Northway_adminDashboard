import { Iproduct } from './../product.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from 'rxjs/operators';



@Injectable({
	providedIn: "root",
})
export class ProductService {
	constructor(private http: HttpClient) {}
	private url = "http://localhost:3000/product";

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

	public GetAllProductSer(): Observable<Iproduct[]> {
		return this.http
			.get<any>(this.url)
			.pipe(retry(3), catchError(this.handleError));
	}

  public AddProductSer(product: Iproduct): Observable<any> {
    let Newbody = JSON.stringify(product);

		return (
			this.http
				.post<any>(this.url, Newbody, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				//{
				// product_name: product.product_name,
				// product_description: product.product_description,
				// product_price: product.product_price,
				// categories: product.categories,
				// Prouduct_image: product.Prouduct_image,
				//}

				.pipe(retry(3), catchError(this.handleError))
		);
	}
}
