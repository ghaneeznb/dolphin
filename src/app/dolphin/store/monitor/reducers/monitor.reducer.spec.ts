
import { initialMonitorState } from '../../states/monitor.state';
import { GetAllMonitorAction, GetAllMonitorSuccessAction, GetAllMonitorFailureAction } from '../actions/monitor.actions';
import { MonitorReducer } from './monitor.reducer';

describe('MonitorReducer', () => {
    describe('undefined action', () => {
        it('should return the default state if getAllMonitor', () => {
            const action = GetAllMonitorAction;
            const state = MonitorReducer(undefined, action);
            expect(state).toEqual({ ...initialMonitorState, state: 'test' });
            expect(state.error).toEqual(initialMonitorState.error);
            expect(state.success).toEqual(initialMonitorState.success);
        });
    });
    describe('getAllMonitor action', () => {
        const action = GetAllMonitorAction;
        const state = MonitorReducer(initialMonitorState, action);
        it('should state to be initial', () => {
            expect(state.state).toEqual('test');
        });
        it('should  "items" have value [] ', () => {
            expect(state.items).toEqual([]);
        });
        it('should  "error" have value null ', () => {
            expect(state.error).toEqual("");
        });
        it('should  "success" have value null ', () => {
            expect(state.success).toEqual("");
        });
    });

    describe('getAllMonitorFinished action', () => {
        const action = GetAllMonitorSuccessAction({ payload: [{ id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full' }] });
        const state = MonitorReducer(initialMonitorState, action);
        it('should  "items" have value ', () => {
            expect(state.items).toEqual([  { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'},]);
        });
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
    });

    describe('getAllMonitorFailure action', () => {
        const action = GetAllMonitorFailureAction({ message: 'failed' });
        const state = MonitorReducer(initialMonitorState, action);
        it('should  "error" have be value', () => {
            expect(state.error).toEqual('failed');
        });
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
    });
});