import { Observable, of, takeUntil, throwError } from "rxjs";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from "@angular/common/http";
import { IAppState } from "src/app/store/states/app.state";
import { UnitEffects } from "./unit.effects";
import { UnitService } from "src/app/dolphin/services/unit.service";
import { GetAllUnitAction, GetAllUnitFailureAction, GetAllUnitSuccessAction } from "../actions/unit.actions";

const initialState = {
    unit: {
        items: [
            { id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' },
        ],
        error: '',
        success: '',
        state: 'test',

    }
}
const mockUnitData = [
    { id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' },
    { id: '654321', unitIcon: 'test', unitTitle: 'unit 03', conectedStatus: false, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' },

]

class MockUnitService {
    getAll() {
        return of(mockUnitData);
    }
}

describe('UnitEffectsTest', () => {
    let actions$: Observable<any>;
    let effects: UnitEffects;
    let store: MockStore<IAppState>;
    let httpService: UnitService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                UnitEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
                {
                    provide: UnitService,
                    useClass: MockUnitService
                },
            ],
        });

        effects = TestBed.inject(UnitEffects);
        store = TestBed.inject(MockStore);
        httpService = TestBed.inject(UnitService);
    });


    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('getAllUnit$', () => {
        it('should load all Unit', (done) => {
            const spy = spyOn(httpService, 'getAll').and.callThrough();
            actions$ = of(GetAllUnitAction);
            effects.getAllUnit$.subscribe((res) => {
                expect(res).toEqual(GetAllUnitSuccessAction({ payload: mockUnitData }));
                expect(spy).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it('loadUnit$ throwError', () => {
            const spy = spyOn(httpService, 'getAll').and.returnValue(throwError({ error: { Code: 'test' } }));
            actions$ = of(GetAllUnitAction);
            effects.getAllUnit$.subscribe((res) => {
                expect(res).toEqual(GetAllUnitFailureAction({ message: 'test' }));
                expect(spy).toHaveBeenCalledTimes(1);
            });
        });

    });
});