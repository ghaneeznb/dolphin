import { Observable, of, throwError } from "rxjs";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IAppState } from "src/app/store/states/app.state";
import { MonitorEffects } from "./monitor.effects";
import { MonitorService } from "src/app/dolphin/services/monitor.service";
import { GetAllMonitorAction, GetAllMonitorFailureAction, GetAllMonitorSuccessAction } from "../actions/monitor.actions";

const initialState = {
    unit: {
        items: [
            { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'},
        ],
        error: '',
        success: '',
        state: 'test',

    }
}
const mockMonitorData = [
    { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'},
    { id: '654321', image: 'test', driver: 'driver 02', temperature: 28, cameraStatus: false, pot: 'full' },

]

class MockMonitorService {
    getAll() {
        return of(mockMonitorData);
    }
}

describe('MonitorEffectsTest', () => {
    let actions$: Observable<any>;
    let effects: MonitorEffects;
    let store: MockStore<IAppState>;
    let httpService: MonitorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                MonitorEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
                {
                    provide: MonitorService,
                    useClass: MockMonitorService
                },
            ],
        });

        effects = TestBed.inject(MonitorEffects);
        store = TestBed.inject(MockStore);
        httpService = TestBed.inject(MonitorService);
    });


    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('getAllMonitor$', () => {
        it('should load all Monitor', (done) => {
            const spy = spyOn(httpService, 'getAll').and.callThrough();
            actions$ = of(GetAllMonitorAction);
            effects.getAllMonitor$.subscribe((res: any) => {
                expect(res).toEqual(GetAllMonitorSuccessAction({ payload: mockMonitorData }));
                expect(spy).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it('loadMonitor$ throwError', () => {
            const spy = spyOn(httpService, 'getAll').and.returnValue(throwError({ error: { Code: 'test' } }));
            actions$ = of(GetAllMonitorAction);
            effects.getAllMonitor$.subscribe((res: any) => {
                expect(res).toEqual(GetAllMonitorFailureAction({ message: 'test' }));
                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

    });
});