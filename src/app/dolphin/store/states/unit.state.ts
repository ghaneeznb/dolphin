
import { IUnit } from "../../models/unit.model";

export interface IUnitState {
    items: Array<IUnit>;
    error: string;
    success: string;
    state: string;
}

export const initialUnitState: IUnitState = {
    items: [],
    error: '',
    success: '',
    state: 'test'
};