import { createActionGroup, emptyProps, props } from "@ngrx/store";

import { User } from "../../users/models/user.model";
import { Credentials } from "../models/credentials";

export const loginActions = createActionGroup({
    source: "Login",
    events: {
        login: props<{ credentials: Credentials }>(),
        "Login Success": props<{ user: User }>(),
        "Login Failed": props<{ error: string }>(),
        logout: emptyProps(),
    },
});
