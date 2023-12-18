
import { initialUnitState } from '../../states/unit.state';
import { GetAllUnitAction} from '../actions/unit.actions';
import { UnitReducer } from './unit.reducer';

describe('UnitReducer', () => {
    describe('undefined action', () => {
        it('should return the default state if getAllUnit', () => {
            const action = GetAllUnitAction;
            const state = UnitReducer(undefined, action);
        });
    });
    describe('getAllUnit action', () => {
        const action = GetAllUnitAction;
        const state = UnitReducer(initialUnitState, action);
        it('should  "items" have value [] ', () => {
            expect(state.items).toEqual([]);
        });
    });
});