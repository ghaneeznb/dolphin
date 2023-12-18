import { GetAllUnitAction } from "./unit.actions";

describe('UnitActionTest', () => {
    describe('GetAllUnit', () => {
        it('should create an action', () => {
            const type = GetAllUnitAction();
            expect(type.type).toEqual('[Unit] GetAll Unit');
        });
    });
})