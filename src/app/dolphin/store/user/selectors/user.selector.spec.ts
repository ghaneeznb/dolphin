
import { IUserState } from "../../states/user.state";
import { GetErrorUserSelector, GetSuccessUserSelector, GetStateUserSelector } from "./user.selector";

describe("UserSelectorsTest", () => {
    const initialState: IUserState = {
        error: '',
        success: '',
        state: 'test',
        loginId: '',
    };
    it("should select the error User ", () => {
        const result = GetErrorUserSelector.projector(initialState);
        expect(result).toBe(initialState.error);
    });
    it("should select the success User ", () => {
        const result = GetSuccessUserSelector.projector(initialState);
        expect(result).toBe(initialState.success);
    });
    it("should select the state User ", () => {
        const result = GetStateUserSelector.projector(initialState);
        expect(result).toBe(initialState.state);
    });
});