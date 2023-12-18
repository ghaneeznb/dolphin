
import { IMonitorState } from "../../states/monitor.state";
import { GetAllMonitorSelector, GetErrorMonitorSelector, GetSuccessMonitorSelector, GetStateMonitorSelector } from "./monitor.selector";

describe("MonitorSelectorsTest", () => {
    const initialState: IMonitorState = {
        items: [
            { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'},
            { id: '654321', image: 'test', driver: 'driver 02', temperature: 28, cameraStatus: false, pot: 'full' },
        ],
        error: '',
        success: '',
        state: 'test',
    };

    it("should select the Monitor list", () => {
        const result = GetAllMonitorSelector.projector(initialState);
        expect(result.length).toBe(2);
        expect(result).toBe(initialState.items);
    });
    it("should select the error Monitor ", () => {
        const result = GetErrorMonitorSelector.projector(initialState);
        expect(result).toBe(initialState.error);
    });
    it("should select the success Monitor ", () => {
        const result = GetSuccessMonitorSelector.projector(initialState);
        expect(result).toBe(initialState.success);
    });
    it("should select the state Monitor ", () => {
        const result = GetStateMonitorSelector.projector(initialState);
        expect(result).toBe(initialState.state);
    });
});