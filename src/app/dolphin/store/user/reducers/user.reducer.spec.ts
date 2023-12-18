import { initialUserState } from '../../states/user.state';
import { LoginUserAction, LoginUserSuccessAction, LoginUserFailureAction } from '../actions/user.actions';
import { UserReducer } from './user.reducer';

describe('UserReducer', () => {
    describe('loginUser action', () => {
        const action = LoginUserAction({
            payload: {
                id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER' 
            }
        });
        const state = UserReducer(initialUserState, action);
        it('should state to be initial', () => {
            expect(state.state).toEqual('test');
        });
        it('should  "error" have value null ', () => {
            expect(state.error).toEqual("");
        });
        it('should  "success" have value null ', () => {
            expect(state.success).toEqual("");
        });
    });

    describe('loginUserFinished action', () => {
        const action = LoginUserSuccessAction({ payload: '1545485485', message: 'success' });
        const state = UserReducer(initialUserState, action);
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
        it('should  "success" have value null ', () => {
            expect(state.success).toEqual('success');
        });
    });
    describe('loginUserFailure action', () => {
        const action = LoginUserFailureAction({ message: 'failed' });
        const state = UserReducer(initialUserState, action);
        it('should  "error" have be value', () => {
            expect(state.error).toEqual('failed');
        });
        it('should state to be operationDone ', () => {
            expect(state.state).toEqual('test');
        });
    });
});