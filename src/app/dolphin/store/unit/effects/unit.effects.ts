import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { UnitService } from 'src/app/dolphin/services/unit.service';
import { GetAllUnitAction, GetAllUnitSuccessAction, GetAllUnitFailureAction} from '../actions/unit.actions';

@Injectable()
export class UnitEffects {
    constructor(
        private actions$: Actions,
        private UnitService: UnitService
    ) {
    }

    getAllUnit$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetAllUnitAction),
            switchMap(() =>
                this.UnitService.getAll().pipe(
                    map(response => GetAllUnitSuccessAction({ payload: response })),
                    catchError(error => of(GetAllUnitFailureAction({ message: 'faild' })))
                )
            )
        )
    );
}