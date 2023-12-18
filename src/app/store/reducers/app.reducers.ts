import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { UnitReducer } from "src/app/dolphin/store/unit";
import { MonitorReducer } from "src/app/dolphin/store/monitor/reducers/monitor.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    unit: UnitReducer,
    monitor: MonitorReducer
};
