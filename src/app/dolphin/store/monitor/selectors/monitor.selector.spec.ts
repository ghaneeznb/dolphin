
import { IMonitorState } from "../../states/monitor.state";
import { GetAllMonitorSelector} from "./monitor.selector";

describe("MonitorSelectorsTest", () => {
    const initialState: IMonitorState = {
        items: [
            { id: '1545485485', image: 'test', driver: 'driver 01', temperature: 25, cameraStatus: true, pot: 'full'},
            { id: '654321', image: 'test', driver: 'driver 02', temperature: 28, cameraStatus: false, pot: 'full' },
        ],
    };

    it("should select the Monitor list", () => {
        const result = GetAllMonitorSelector.projector(initialState);
        expect(result.length).toBe(2);
        expect(result).toBe(initialState.items);
    });
});