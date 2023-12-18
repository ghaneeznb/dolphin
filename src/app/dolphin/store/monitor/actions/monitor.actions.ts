import { createAction, props } from "@ngrx/store";
import { IMonitor } from "src/app/dolphin/models/monitor.model";

export const GetAllMonitorAction = createAction(
    '[Monitor] GetAll Monitor'
);
