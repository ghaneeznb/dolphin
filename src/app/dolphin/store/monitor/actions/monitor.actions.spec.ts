import { GetAllMonitorAction} from "./monitor.actions";



describe('MonitorActionTest', () => {
    describe('GetAllMonitor', () => {
        it('should create an action', () => {
            const type = GetAllMonitorAction();
            expect(type.type).toEqual('[Monitor] GetAll Monitor');
        });
    });
})