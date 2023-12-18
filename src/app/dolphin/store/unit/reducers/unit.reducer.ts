import { createReducer, on, Action } from "@ngrx/store";
import { GetAllUnitAction, GetAllUnitSuccessAction, GetAllUnitFailureAction } from "../actions/unit.actions";
import { IUnitState, initialUnitState } from "../../states/unit.state";

const UnitReducerInternal = createReducer(
    initialUnitState,
    on(
        GetAllUnitAction,
        (state) => ({
            ...state,
            state: 'test',
            error: '',
            success: '',
        })
    ),
    on(GetAllUnitSuccessAction,
        (state, { payload }) => ({
            ...state,
            items: [...payload],
            state: 'Success'
        })),
    on(
        GetAllUnitFailureAction,
        (state, { message }) => ({
            ...state,
            error: message,
            state: 'Faild',
        })),
);

export function UnitReducer(
    state: IUnitState | undefined,
    action: Action
) {
    return UnitReducerInternal(state, action);
}