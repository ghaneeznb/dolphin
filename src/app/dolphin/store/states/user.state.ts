export interface IUserState {
    error: string;
    success: string;
    loginId: string;
    state: string;
}

export const initialUserState: IUserState = {
    error: '',
    success: '',
    loginId: '',
    state: 'test',
};