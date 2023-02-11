import { createFeature, createReducer, on } from "@ngrx/store";
import { loginActions } from "./login.actions";
import * as fromLogin from "./login.state";

export const loginFeature = createFeature({
    name: "login",
    reducer: createReducer(
        fromLogin.initialState,
        on(loginActions.login, (state) => ({ ...state, loading: true })),
        on(loginActions.loginSuccess, (state, action) => ({
            ...state,
            user: action.user,
            loading: false,
        })),
        on(loginActions.loginFailed, (state, action) => ({
            ...state,
            error: action.error,
            loading: false,
        })),
        on(loginActions.logout, () => ({
            user: null,
            error: null,
            loading: false,
        }))
    ),
});
