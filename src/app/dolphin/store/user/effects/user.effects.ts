import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/dolphin/services/user.service';
import { LoginUserAction, LoginUserFailureAction, LoginUserSuccessAction } from '../actions/user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService,
    ) {
    }

    loginUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoginUserAction),
            map(action => action.payload),
            switchMap((payload: any) =>
                this.userService.post(payload).pipe(
                    map(id => LoginUserSuccessAction({ payload: id, message: 'User loggin Successfully'})),
                    catchError(error => of(LoginUserFailureAction({ message: 'User loggin Faild' })))
                )
            )
        )
    );
}