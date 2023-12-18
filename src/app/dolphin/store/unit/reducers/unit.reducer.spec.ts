
import { initialUnitState } from '../../states/unit.state';
import { GetAllUnitAction, GetAllUnitSuccessAction, GetAllUnitFailureAction } from '../actions/unit.actions';
import { UnitReducer } from './unit.reducer';

describe('UnitReducer', () => {
    describe('undefined action', () => {
        it('should return the default state if getAllUnit', () => {
            const action = GetAllUnitAction;
            const state = UnitReducer(undefined, action);
            expect(state).toEqual({ ...initialUnitState, state: 'test' });
            expect(state.error).toEqual(initialUnitState.error);
            expect(state.success).toEqual(initialUnitState.success);
        });
    });
    describe('getAllUnit action', () => {
        const action = GetAllUnitAction;
        const state = UnitReducer(initialUnitState, action);
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

    describe('getAllUnitFinished action', () => {
        const action = GetAllUnitSuccessAction({ payload: [{ id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' }] });
        const state = UnitReducer(initialUnitState, action);
        it('should  "items" have value ', () => {
            expect(state.items).toEqual([{ id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago'}]);
        });
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
    });

    describe('getAllUnitFailure action', () => {
        const action = GetAllUnitFailureAction({ message: 'failed' });
        const state = UnitReducer(initialUnitState, action);
        it('should  "error" have be value', () => {
            expect(state.error).toEqual('failed');
        });
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
    });
});