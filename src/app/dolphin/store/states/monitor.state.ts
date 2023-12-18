import { IMonitor } from "../../models/monitor.model";

export interface IMonitorState {
    items: Array<IMonitor>;
}

export const initialMonitorState: IMonitorState = {
    items: [
        {
            id: '123456',
            title:'unit 01',
            image: '../../../../assets/car.png',
            driver: 'driver 01',
            temperature: 25,
            cameraStatus: true,
            pot: 'full',
        },
        {
            id: '123456',
            title:'unit 02',
            image: '../../../../assets/car1.png',
            driver: 'driver 02',
            temperature: 23,
            cameraStatus: true,
            pot: 'full',
        },
        {
            id: '123456',
            title:'unit 03',
            image: '../../../../assets/car2.png',
            driver: 'driver 03',
            temperature: 25,
            cameraStatus: true,
            pot: 'full',
        },
        {
            id: '123456',
            title:'unit 04',
            image: '../../../../assets/car.png',
            driver: 'driver 04',
            temperature: 28,
            cameraStatus: true,
            pot: 'full',
        },
        {
            id: '123456',
            title:'unit 05',
            image: '../../../../assets/car1.png',
            driver: 'driver 05',
            temperature: 25,
            cameraStatus: false,
            pot: 'full',
        }

        
    ],
}