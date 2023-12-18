import { createReducer, on, Action } from "@ngrx/store";
import { GetAllMonitorAction, GetAllMonitorSuccessAction, GetAllMonitorFailureAction } from "../actions/monitor.actions";
import { IMonitorState, initialMonitorState } from "../../states/monitor.state";

const MonitorReducerInternal = createReducer(
    initialMonitorState,
    on(
        GetAllMonitorAction,
        (state) => ({
            ...state,
            state: 'test',
            error: '',
            success: '',
        })
    ),
    on(GetAllMonitorSuccessAction,
        (state, { payload }) => ({
            ...state,
            items: [...payload],
            state: 'Success'
        })),
    on(
        GetAllMonitorFailureAction,
        (state, { message }) => ({
            ...state,
            error: message,
            state: 'Faild',
        })),
);

export function MonitorReducer(
    state: IMonitorState | undefined,
    action: Action
) {
    return MonitorReducerInternal(state, action);
}