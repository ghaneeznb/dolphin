
import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/dolphin/models/user.model";

export const LoginUserAction = createAction(
    '[User] Login User',
    props<{ payload: IUser }>()
);

export const LoginUserSuccessAction = createAction(
    '[User] Login User Success',
    props<{ payload: string, message: string }>()
);

export const LoginUserFailureAction = createAction(
    '[User] Login User Failed',
    props<{ message: string }>()
);

