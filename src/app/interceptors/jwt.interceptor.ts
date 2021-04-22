import { Injectable } from "@angular/core";
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { JWT_token } from "../Auth/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler,
	): Observable<HttpEvent<unknown>> {
		const token = localStorage.getItem(JWT_token);
		if (token) {
			const cloneRequest = request.clone({
				headers: request.headers.set("Authorization", "Bearer " + token),
			});
			return next.handle(cloneRequest);
		} else {
			return next.handle(request);
		}
	}
}
