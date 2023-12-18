import { IMonitorState, initialMonitorState } from "src/app/dolphin/store/states/monitor.state";
import { IUnitState, initialUnitState } from "src/app/dolphin/store/states/unit.state";

export interface IAppState {
    unit: IUnitState;
    monitor: IMonitorState
}

export const initialAppState: IAppState = {
    unit: initialUnitState,
    monitor: initialMonitorState
};