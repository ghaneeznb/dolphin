import { GetAllMonitorAction, GetAllMonitorSuccessAction, GetAllMonitorFailureAction } from "./monitor.actions";



describe('MonitorActionTest', () => {
    describe('GetAllMonitor', () => {
        it('should create an action', () => {
            const type = GetAllMonitorAction();
            expect(type.type).toEqual('[Monitor] GetAll Monitor');
        });

        it('should create an actionSuccess', () => {
            const type = GetAllMonitorSuccessAction({ payload: [{ id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full' }] });
            expect(type.payload).toEqual([ { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'}]);
            expect(type.type).toEqual('[Monitor] GetAll Monitor Success')
        });

        it('should create an actionFailure', () => {
            const type = GetAllMonitorFailureAction({ message: 'error' });
            expect(type.message).toEqual('error');
            expect(type.type).toEqual('[Monitor] GetAll Monitor Failed')
        });
    });
})