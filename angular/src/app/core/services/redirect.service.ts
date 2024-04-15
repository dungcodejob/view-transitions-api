import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class RedirectService {
  private readonly _router = inject(Router);

  goToHome() {
    this._router.navigate(["/home"]);
  }

  goToLogin() {
    this._router.navigate(["security/login"]);
  }
}
