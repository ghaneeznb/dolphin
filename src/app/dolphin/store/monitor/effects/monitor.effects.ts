import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { MonitorService } from 'src/app/dolphin/services/monitor.service';
import { GetAllMonitorAction, GetAllMonitorSuccessAction, GetAllMonitorFailureAction} from '../actions/monitor.actions';

@Injectable()
export class MonitorEffects {
    constructor(
        private actions$: Actions,
        private MonitorService: MonitorService
    ) {
    }

    getAllMonitor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(GetAllMonitorAction),
            switchMap(() =>
                this.MonitorService.getAll().pipe(
                    map(response => GetAllMonitorSuccessAction({ payload: response })),
                    catchError(error => of(GetAllMonitorFailureAction({ message: 'faild' })))
                )
            )
        )
    );
}