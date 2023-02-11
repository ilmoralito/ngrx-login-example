import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { LoginService } from "../services/login/login.service";
import { loginActions } from "./login.actions";

@Injectable()
export class LoginEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loginActions.login),
            switchMap((action) =>
                this.loginService.login(action.credentials).pipe(
                    map((user) => {
                        this.router.navigateByUrl("dashboard").then();
                        return loginActions.loginSuccess({ user });
                    }),
                    catchError((error) =>
                        of(loginActions.loginFailed({ error }))
                    )
                )
            )
        )
    );

    constructor(
        private readonly router: Router,
        private readonly actions$: Actions,
        private readonly loginService: LoginService
    ) {}
}
