import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/store/states/app.state";
import { IUserState } from "../../states/user.state";

const selectUser = (state: IAppState) => state.user;

export const GetErrorUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.error
);

export const GetSuccessUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.success
);

export const GetStateUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.state
);

export const GetDefineIdUserSelector = createSelector(
    selectUser,
    (state: IUserState) => state.loginId
);
