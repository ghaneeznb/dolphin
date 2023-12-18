
import { IUnit } from "../../models/unit.model";

export interface IUnitState {
    items: Array<IUnit>;
}

export const initialUnitState: IUnitState = {
    items: [
        {
            id: '123456',
            unitIcon: '../../../../assets/car.png',
            unitTitle: 'Unit 01',
            conectedStatus: true,
            iMEI: '123458',
            tags: 'service',
            lastTimePoint: '15',
        },
        {
            id: '546415',
            unitIcon: '../../../../assets/car1.png',
            unitTitle: 'Unit 02',
            conectedStatus: true,
            iMEI: '534534',
            tags: 'service',
            lastTimePoint: '15',
        },
        {
            id: '65465465',
            unitIcon: '../../../../assets/car2.png',
            unitTitle: 'Unit 03',
            conectedStatus: true,
            iMEI: '25454',
            tags: 'test',
            lastTimePoint: '20',
        },
        {
            id: '655646',
            unitIcon: '../../../../assets/car.png',
            unitTitle: 'Unit 04',
            conectedStatus: false,
            iMEI: '56543',
            tags: 'service',
            lastTimePoint: '17',
        },
        {
            id: '54564354',
            unitIcon: '../../../../assets/car1.png',
            unitTitle: 'Unit 05',
            conectedStatus: true,
            iMEI: 'jbjhgjh',
            tags: 'prototype',
            lastTimePoint: '18',
        },
        {
            id: '564644',
            unitIcon: '../../../../assets/car2.png',
            unitTitle: 'Unit 04',
            conectedStatus: false,
            iMEI: '153465',
            tags: 'prototype',
            lastTimePoint: '15',
        }
    ],
}