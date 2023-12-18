import { createReducer, on, Action } from "@ngrx/store";
import { GetAllMonitorAction, } from "../actions/monitor.actions";
import { IMonitorState, initialMonitorState } from "../../states/monitor.state";

const MonitorReducerInternal = createReducer(
    initialMonitorState,
    on(
        GetAllMonitorAction,
        (state) => ({
            ...state,
        })
    ),
);

export function MonitorReducer(
    state: IMonitorState | undefined,
    action: Action
) {
    return MonitorReducerInternal(state, action);
}