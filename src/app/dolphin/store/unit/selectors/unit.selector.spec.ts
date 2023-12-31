
import { IUnitState } from "../../states/unit.state";
import { GetAllUnitSelector } from "./unit.selector";

describe("UnitSelectorsTest", () => {
    const initialState: IUnitState = {
        items: [
            { id: '1545485485', unitIcon: 'test', unitTitle: 'unit 02', conectedStatus: true, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' },
            { id: '654321', unitIcon: 'test', unitTitle: 'unit 03', conectedStatus: false, iMEI: '1234566', tags: 'service', lastTimePoint: '15 m ago' },
        ],
    };

    it("should select the Unit list", () => {
        const result = GetAllUnitSelector.projector(initialState);
        expect(result.length).toBe(2);
        expect(result).toBe(initialState.items);
    });
});