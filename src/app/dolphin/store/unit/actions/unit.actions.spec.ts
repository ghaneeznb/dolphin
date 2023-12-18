import { GetAllUnitAction, GetAllUnitSuccessAction, GetAllUnitFailureAction } from "./unit.actions";



describe('UnitActionTest', () => {
    describe('GetAllUnit', () => {
        it('should create an action', () => {
            const type = GetAllUnitAction();
            expect(type.type).toEqual('[Unit] GetAll Unit');
        });

        it('should create an actionSuccess', () => {
            const type = GetAllUnitSuccessAction({ payload: [{ id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' }] });
            expect(type.payload).toEqual([{ id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago'  }]);
            expect(type.type).toEqual('[Unit] GetAll Unit Success')
        });

        it('should create an actionFailure', () => {
            const type = GetAllUnitFailureAction({ message: 'error' });
            expect(type.message).toEqual('error');
            expect(type.type).toEqual('[Unit] GetAll Unit Failed')
        });
    });
})