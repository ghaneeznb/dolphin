import { createSelector } from "@ngrx/store";
import { IAppState } from "src/app/store/states/app.state";
import { IMonitorState } from "../../states/monitor.state";

const selectMonitor = (state: IAppState) => state.monitor;

export const GetAllMonitorSelector = createSelector(
    selectMonitor,
    (state: IMonitorState) => state.items
);