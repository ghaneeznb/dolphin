import {
    LoginUserAction, LoginUserSuccessAction, LoginUserFailureAction,

} from "./user.actions";

describe('UserActionTest', () =>

    describe('loginUser', () => {
        it('should create an action', () => {
            const type = LoginUserAction({
                payload: { id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER' }
            });
            expect(type.type).toEqual('[User] Login User');
            expect(type.payload).toEqual({
                id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER'
            });
        });

        it('should create an actionSuccess', () => {
            const type = LoginUserSuccessAction({ payload: '1545485485', message: 'success' });
            expect(type.payload).toEqual('1545485485');
            expect(type.type).toEqual('[User] Login User Success')
        });

        it('should create an actionFailure', () => {
            const type = LoginUserFailureAction({ message: 'error' });
            expect(type.message).toEqual('error');
            expect(type.type).toEqual('[User] Login User Failed')
        });
    })
);