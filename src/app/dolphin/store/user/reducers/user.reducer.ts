import { createReducer, on, Action } from "@ngrx/store";
import { LoginUserAction, LoginUserSuccessAction, LoginUserFailureAction, } from "../actions/user.actions";
import { IUserState, initialUserState } from "../../states/user.state";

const UserReducerInternal = createReducer(
    initialUserState,
    on(
        LoginUserAction,
        state => ({
            ...state,
            state: 'login',
            error: '',
            success: '',
        })
    ),
    on(
        LoginUserSuccessAction, (state, { payload, message }) => ({
            ...state,
            state: 'operationDone',
            success: message,
            loginId: payload,
        })),
    on(
        LoginUserFailureAction, (state, { message }) => ({
            ...state,
            error: message,
            state: 'operationDone',
        })),
);

export function UserReducer(
    state: IUserState | undefined,
    action: Action
) {
    return UserReducerInternal(state, action);
}