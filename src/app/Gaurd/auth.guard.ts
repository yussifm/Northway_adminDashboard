import { Injectable } from "@angular/core";
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../Auth/auth.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authservice: AuthService, private route: Router) {}
	canActivate(): boolean {
		if (!this.authservice.IsAuthenticated()) {
			this.route.navigate(["login"]);
			return false;
		}
		return true;
	}
}
