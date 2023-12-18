import { createReducer, on, Action } from "@ngrx/store";
import { GetAllUnitAction } from "../actions/unit.actions";
import { IUnitState, initialUnitState } from "../../states/unit.state";

const UnitReducerInternal = createReducer(
    initialUnitState,
    on(
        GetAllUnitAction,
        (state) => ({
            ...state,
        })
    ),
);

export function UnitReducer(
    state: IUnitState | undefined,
    action: Action
) {
    return UnitReducerInternal(state, action);
}