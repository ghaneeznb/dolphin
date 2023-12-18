
import { initialMonitorState } from '../../states/monitor.state';
import { GetAllMonitorAction } from '../actions/monitor.actions';
import { MonitorReducer } from './monitor.reducer';

describe('MonitorReducer', () => {
    describe('undefined action', () => {
        it('should return the default state if getAllMonitor', () => {
            const action = GetAllMonitorAction;
            const state = MonitorReducer(undefined, action);
        });
    });
    describe('getAllMonitor action', () => {
        const action = GetAllMonitorAction;
        const state = MonitorReducer(initialMonitorState, action);
        it('should  "items" have value [] ', () => {
            expect(state.items).toEqual([]);
        });
    });
});