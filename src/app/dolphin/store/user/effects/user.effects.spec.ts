import { Observable, of, throwError } from "rxjs";
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginUserAction, LoginUserSuccessAction, LoginUserFailureAction } from "../actions/user.actions";
import { IUser } from "src/app/dolphin/models/user.model";
import { IAppState } from "src/app/store/states/app.state";
import { UserService } from "src/app/dolphin/services/user.service";
import { UserEffects } from "./user.effects";

const initialState = {
    error: '',
    success: '',
    state: 'test',

}
const mockUserData = [
    { id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER' },
]

class MockUserService {

    post(User: IUser) {
        return of(mockUserData[0].id)
    }
}

describe('UserEffectsTest', () => {
    let actions$: Observable<any>;
    let effects: UserEffects;
    let store: MockStore<IAppState>;
    let httpService: UserService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                UserEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
                {
                    provide: UserService,
                    useClass: MockUserService
                },
            ],
        });

        effects = TestBed.inject(UserEffects);
        store = TestBed.inject(MockStore);
        httpService = TestBed.inject(UserService);
    });


    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    describe('loginUser$', () => {
        it('should add User', (done) => {
            const spy = spyOn(httpService, 'post').and.callThrough();
            actions$ = of(LoginUserAction({
                payload: {
                    id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER'
                }
            }));
            effects.loginUser$.subscribe((res: any) => {
                expect(res).toEqual(LoginUserSuccessAction({ payload: mockUserData[0].id, message: 'User login successfully' }));
                expect(spy).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it('loginUser$ throwError', () => {
            const spy = spyOn(httpService, 'post').and.returnValue(throwError({ error: { Code: 'test' } }));
            actions$ = of(LoginUserAction({
                payload: {
                    id: '1545485485', userName: 'zeynab.ghane@gmail.com', password: '1234QWER'
                }
            }));
            effects.loginUser$.subscribe((res: any) => {
                expect(res).toEqual(LoginUserFailureAction({ message: 'test' }));
                expect(spy).toHaveBeenCalledTimes(1);
            });
        });
    });
});