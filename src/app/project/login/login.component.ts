import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { loginActions } from "./state/login.actions";

import * as fromLogin from "./state/login.state";
import * as fromLoginSelectors from "./state/login.selectors";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  loading$ = this.store.select(fromLoginSelectors.selectLoading);
  error$ = this.store.select(fromLoginSelectors.selectError);
  vm$ = this.store.select(fromLoginSelectors.vm$);

  constructor(private readonly store: Store<fromLogin.State>) {}

  login() {
    this.store.dispatch(
      loginActions.login({ credentials: { username: "adaa", password: "wong" } })
    );
  }
}
