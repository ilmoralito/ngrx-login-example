import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { loginActions } from "../login/state/login.actions";

import * as fromLogin from "../login/state/login.state";
import * as fromLoginSelectors from "../login/state/login.selectors";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  user$ = this.store.select(fromLoginSelectors.selectUser);

  constructor(
    private readonly router: Router,
    private readonly store: Store<fromLogin.State>
  ) {}

  logout() {
    this.store.dispatch(loginActions.logout());
    this.router.navigateByUrl("login").then();
  }
}
