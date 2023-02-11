import { createFeatureSelector, createSelector } from "@ngrx/store";

import { loginFeature } from "./login.reducer";
import { State } from "./login.state";

export const {
    name,
    reducer,
    selectError,
    selectLoading,
    selectUser,
    selectLoginState,
} = loginFeature;

export const selectLoginFeature = createFeatureSelector<State>("login");

export const vm$ = createSelector(
    selectLoading,
    selectError,
    (loading, error) => ({ loading, error })
);
