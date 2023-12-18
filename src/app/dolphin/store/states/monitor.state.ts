import { IMonitor } from "../../models/monitor.model";

export interface IMonitorState {
    items: Array<IMonitor>;
    error: string;
    success: string;
    state: string;
}

export const initialMonitorState: IMonitorState = {
    items: [],
    error: '',
    success: '',
    state: 'test',
};