import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { UserReducer } from "src/app/dolphin/store/user/reducers/user.reducer";
import { UnitReducer } from "src/app/dolphin/store/unit";
import { MonitorReducer } from "src/app/dolphin/store/monitor/reducers/monitor.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    user: UserReducer,
    unit: UnitReducer,
    monitor: MonitorReducer
};
