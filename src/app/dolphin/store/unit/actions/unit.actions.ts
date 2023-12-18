import { createAction, props } from "@ngrx/store";
import { IUnit } from "src/app/dolphin/models/unit.model";

export const GetAllUnitAction = createAction(
    '[Unit] GetAll Unit'
);

export const GetAllUnitSuccessAction = createAction(
    '[Unit] GetAll Unit Success',
    props<{ payload: Array<IUnit> }>()
);

export const GetAllUnitFailureAction = createAction(
    '[Unit] GetAll Unit Failed',
    props<{ message: any }>()
);
