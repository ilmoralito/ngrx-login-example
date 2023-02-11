import { User } from "../../users/models/user.model";

export interface State {
    user: User | null;
    error: string | null;
    loading: boolean;
}

export const initialState: State = { user: null, error: null, loading: false };
