import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/store/states/app.state";
import { IUnitState } from "../../states/unit.state";

const selectUnit = (state: IAppState) => state.unit;

export const GetAllUnitSelector = createSelector(
    selectUnit,
    (state: IUnitState) => state.items
);
