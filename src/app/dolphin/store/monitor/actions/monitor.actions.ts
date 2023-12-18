import { createAction, props } from "@ngrx/store";
import { IMonitor } from "src/app/dolphin/models/monitor.model";

export const GetAllMonitorAction = createAction(
    '[Monitor] GetAll Monitor'
);

export const GetAllMonitorSuccessAction = createAction(
    '[Monitor] GetAll Monitor Success',
    props<{ payload: Array<IMonitor> }>()
);

export const GetAllMonitorFailureAction = createAction(
    '[Monitor] GetAll Monitor Failed',
    props<{ message: any }>()
);
