import { IMonitorState, initialMonitorState } from "src/app/dolphin/store/states/monitor.state";
import { IUnitState, initialUnitState } from "src/app/dolphin/store/states/unit.state";
import { IUserState, initialUserState } from "src/app/dolphin/store/states/user.state";


export interface IAppState {
    user: IUserState;
    unit: IUnitState;
    monitor: IMonitorState
}

export const initialAppState: IAppState = {
    user: initialUserState,
    unit: initialUnitState,
    monitor: initialMonitorState
};